const firstPizzaBox = document.querySelector('.first-box');
const secondPizzaBox = document.querySelector('.second-box');

const firstDiameter = firstPizzaBox.querySelector('#first-diameter');
const firstAmount = firstPizzaBox.querySelector('#first-amount');
const firstPrice = firstPizzaBox.querySelector('#first-price');

const secondDiameter = secondPizzaBox.querySelector('#second-diameter');
const secondAmount = secondPizzaBox.querySelector('#second-amount');
const secondPrice = secondPizzaBox.querySelector('#second-price');

const firstArea = document.querySelector('.first-area');
const firstCost = document.querySelector('.first-cost');

const secondArea = document.querySelector('.second-area');
const secondCost = document.querySelector('.second-cost');

const chooseThisPizza = document.querySelector('.choose-this');
const chooseThisPizza2 = document.querySelector('.choose-this2');
const checkBtn = document.querySelector('.check');
const results = document.querySelectorAll('.results');

const allInputs = [
	firstDiameter,
	firstAmount,
	firstPrice,
	secondDiameter,
	secondAmount,
	secondPrice,
];
let areaOfFirstPizza;
let areaOfSecondPizza;
let pricePerCm;
let pricePerCm2;

const calculateArea = () => {
	let r1 = firstDiameter.value / 2;
	areaOfFirstPizza = parseFloat(Math.PI * r1 * r1 * firstAmount.value);
	pricePerCm = parseFloat((firstPrice.value / areaOfFirstPizza) * 100);
	firstArea.textContent = areaOfFirstPizza.toFixed(1);
	firstCost.textContent = pricePerCm.toFixed(2);

	let r2 = secondDiameter.value / 2;
	areaOfSecondPizza = parseFloat(Math.PI * r2 * r2 * secondAmount.value);
	pricePerCm2 = parseFloat((secondPrice.value / areaOfSecondPizza) * 100);
	secondArea.textContent = areaOfSecondPizza.toFixed(1);
	secondCost.textContent = pricePerCm2.toFixed(2);
};

const firstPizzaBetter = () => {
	firstPizzaBox.classList.add('success');
	secondPizzaBox.classList.add('failure');

	chooseThisPizza.textContent = 'WYBIERZ TĄ!';
	chooseThisPizza.style.color = 'rgb(20, 70, 1)';

	chooseThisPizza2.textContent = 'TEJ NIE BIERZ!';
	chooseThisPizza2.style.color = 'rgb(92, 14, 0)';
};

const secondPizzaBetter = () => {
	firstPizzaBox.classList.add('failure');
	secondPizzaBox.classList.add('success');

	chooseThisPizza.textContent = 'TEJ NIE BIERZ';
	chooseThisPizza.style.color = 'rgb(92, 14, 0)';

	chooseThisPizza2.textContent = 'WYBIERZ TĄ!';
	chooseThisPizza2.style.color = 'rgb(20, 70, 1)';
};

const bothPizzaAreGood = () => {
	firstPizzaBox.classList.add('equal');
	secondPizzaBox.classList.add('equal');

	chooseThisPizza.textContent = 'OBIE SĄ DOBRE!';
	chooseThisPizza.style.color = 'rgb(199, 146, 1)';

	chooseThisPizza2.textContent = 'OBIE SĄ DOBRE!';
	chooseThisPizza2.style.color = 'rgb(199, 146, 1)';
};

const removeClasses = () => {
	firstPizzaBox.classList.remove('success');
	firstPizzaBox.classList.remove('failure');
	firstPizzaBox.classList.remove('equal');
	secondPizzaBox.classList.remove('success');
	secondPizzaBox.classList.remove('failure');
	secondPizzaBox.classList.remove('equal');

	results.forEach((result) => {
		result.style.display = 'none';
	});
};

const addDisplayBlock = () => {
	results.forEach((result) => {
		result.style.display = 'block';
	});
};

const comparePizza = () => {
	calculateArea();

	if (pricePerCm2 > pricePerCm) {
		addDisplayBlock();
		firstPizzaBetter();
	} else if (pricePerCm2 < pricePerCm) {
		addDisplayBlock();
		secondPizzaBetter();
	} else if (pricePerCm2 === pricePerCm && areaOfFirstPizza > areaOfSecondPizza) {
		addDisplayBlock();
		firstPizzaBetter();
	} else if (pricePerCm2 === pricePerCm && areaOfFirstPizza< areaOfSecondPizza) {
		addDisplayBlock();
		secondPizzaBetter();
	} else if (pricePerCm2 === pricePerCm && areaOfFirstPizza === areaOfSecondPizza) {
		addDisplayBlock();
		bothPizzaAreGood();
	}
};

const checkInputs = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearErrors(el);
		}
	});
};

const showError = (input, msg) => {
	input.classList.add('error-input');
	let errorMsg = input.nextElementSibling;
	errorMsg.textContent = msg;
};

const clearErrors = (input) => {
	input.classList.remove('error-input');
	let errorMsg = input.nextElementSibling;
	errorMsg.textContent = '';
};

const countErrors = () => {
	let errorCounter = 0;

	allInputs.forEach((input) => {
		if (input.classList.contains('error-input')) {
			errorCounter++;
		}
	});

	if (errorCounter === 0) {
		comparePizza();
	}
};

const showResults = () => {
	removeClasses();
	checkInputs(allInputs);
	countErrors();
};

checkBtn.addEventListener('click', showResults);

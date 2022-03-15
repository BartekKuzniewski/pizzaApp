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
const boxForInput = document.querySelectorAll('.box');

const allInputs = [
	firstDiameter,
	firstAmount,
	firstPrice,
	secondDiameter,
	secondAmount,
	secondPrice,
];
let sqr;
let sqr2;
let pricePerCm;
let pricePerCm2;

const calculateField = () => {
	let r1 = firstDiameter.value / 2;
	sqr = parseFloat(Math.PI * r1 * r1 * firstAmount.value);
	pricePerCm = parseFloat((firstPrice.value / sqr) * 100);
	firstArea.textContent = sqr.toFixed(1);
	firstCost.textContent = pricePerCm.toFixed(2);

	let r2 = secondDiameter.value / 2;
	sqr2 = parseFloat(Math.PI * r2 * r2 * secondAmount.value);
	pricePerCm2 = parseFloat((secondPrice.value / sqr2) * 100);
	secondArea.textContent = sqr2.toFixed(1);
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
	chooseThisPizza.style.color = 'rgb(32, 20, 197)';

	chooseThisPizza2.textContent = 'OBIE SĄ DOBRE!';
	chooseThisPizza2.style.color = 'rgb(32, 20, 197)';
};

const addDisplayBlock = () => {
	results.forEach((result) => {
		result.style.display = 'block';
	});
};

const comparePizza = () => {
	calculateField();

	if (pricePerCm2 > pricePerCm) {
		addDisplayBlock();
		firstPizzaBetter();
	} else if (pricePerCm2 < pricePerCm) {
		addDisplayBlock();
		secondPizzaBetter();
	} else if (pricePerCm2 === pricePerCm && sqr > sqr2) {
		addDisplayBlock();
		firstPizzaBetter();
	} else if (pricePerCm2 === pricePerCm && sqr < sqr2) {
		addDisplayBlock();
		secondPizzaBetter();
	} else if (pricePerCm2 === pricePerCm && sqr === sqr2) {
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
	checkInputs(allInputs);
	countErrors();
};

checkBtn.addEventListener('click', showResults);

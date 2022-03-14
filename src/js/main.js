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

// const allInputs = [
// 	firstDiameter,
// 	firstAmount,
// 	firstPrice,
// 	secondDiameter,
// 	secondAmount,
// 	secondPrice,
// ];

let sqr;
let sqr2;
let pricePerCm;
let pricePerCm2;

const calculateField = () => {
	let r1 = firstDiameter.value / 2;
	sqr = parseFloat(Math.PI * r1 * r1 * firstAmount.value).toFixed(1);
	pricePerCm = ((firstPrice.value / sqr) * 100).toFixed(2);
	firstArea.textContent = sqr;
	firstCost.textContent = pricePerCm;

	let r2 = secondDiameter.value / 2;
	sqr2 = parseFloat(Math.PI * r2 * r2 * secondAmount.value).toFixed(1);
	pricePerCm2 = ((secondPrice.value / sqr2) * 100).toFixed(2);
	secondArea.textContent = sqr2;
	secondCost.textContent = pricePerCm2;

	console.log(pricePerCm);
	console.log(pricePerCm2);
};

const comparePizza = () => {
	calculateField();

	if (pricePerCm2 > pricePerCm) {
		results.forEach((result) => {
			result.style.display = 'block';
		});

		firstPizzaBox.classList.add('success');
		secondPizzaBox.classList.add('failure');

		chooseThisPizza.textContent = 'WYBIERZ TĄ!';
		chooseThisPizza.style.color = 'rgb(20, 70, 1)';

		chooseThisPizza2.textContent = 'TA NIE!';
		chooseThisPizza2.style.color = 'rgb(92, 14, 0)';
	} else {
		results.forEach((result) => {
			result.style.display = 'block';
		});
		firstPizzaBox.classList.add('failure');
		secondPizzaBox.classList.add('success');

		chooseThisPizza2.textContent = 'WYBIERZ TĄ!';
		chooseThisPizza2.style.color = 'rgb(20, 70, 1)';

		chooseThisPizza.textContent = 'TA NIE!';
		chooseThisPizza.style.color = 'rgb(92, 14, 0)';
	}
};

const showResults = () => {
	if (
		firstDiameter.value === '' ||
		firstAmount.value === '' ||
		firstPrice.value === '' ||
		secondDiameter.value === '' ||
		secondAmount.value === '' ||
		secondPrice.value === ''
	) {
		console.log('błąd');
	} else {
		comparePizza();
	}
};

checkBtn.addEventListener('click', showResults);

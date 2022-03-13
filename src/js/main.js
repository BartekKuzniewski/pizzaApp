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
const checkBtn = document.querySelector('.check');

let r;
let sqr;

const calculateField = (diameter, amount, price, area, cost) => {
	r = diameter.value / 2;
	console.log(r);
	sqr = parseFloat(Math.PI * r * r * amount.value).toFixed(1);
	console.log(sqr);

	area.textContent = sqr;

	cost.textContent = ((price.value / sqr) * 100).toFixed(2);
};

const showResults = () => {
	calculateField(firstDiameter, firstAmount, firstPrice, firstArea, firstCost);
	calculateField(
		secondDiameter,
		secondAmount,
		secondPrice,
		secondArea,
		secondCost
	);
};

checkBtn.addEventListener('click', showResults);

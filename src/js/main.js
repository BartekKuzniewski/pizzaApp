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


let sqr;
let sqr2;
let pricePerCm;
let pricePerCm2


const calculateField = () => {

	let r1 = firstDiameter.value / 2;
	sqr = parseFloat(Math.PI * r1 * r1 * firstAmount.value).toFixed(1);
    pricePerCm = ((firstPrice.value / sqr) * 100).toFixed(2)
	firstArea.textContent = sqr;
	firstCost.textContent = pricePerCm;

    let r2 = secondDiameter.value / 2;
	sqr2 = parseFloat(Math.PI * r2 * r2 * secondAmount.value).toFixed(1);
    pricePerCm2 = ((secondPrice.value / sqr2) * 100).toFixed(2)
	secondArea.textContent = sqr2;
	secondCost.textContent = pricePerCm2;
};

checkBtn.addEventListener('click', calculateField);


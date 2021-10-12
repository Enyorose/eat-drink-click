const beerCost = 6.25;
const burgerCost = 4.75;
const popCost = 3.00;

let accountBalance = 15.75;
const outputBalance = document.querySelector('.balance');
outputBalance.textContent = accountBalance.toFixed(2);


// Drink beer
const drinkBeer = function () {
accountBalance = accountBalance - beerCost;
outputBalance.textContent = accountBalance.toFixed(2);
}
// Eat burger
const eatburger = function () {
accountBalance = accountBalance - burgerCost;
outputBalance.textContent = accountBalance.toFixed(2);
}
// Drink pop
const drinkPop = function () {
accountBalance = accountBalance - popCost;
outputBalance.textContent = accountBalance.toFixed(2);
}

const beerButton = document.querySelector('.drink-beer')
const burgerButton = document.querySelector('.eat-burger')
const popButton = document.querySelector('.drink-pop')

beerButton.addEventListener('click', drinkBeer)
burgerButton.addEventListener('click', eatburger)
popButton.addEventListener('click', drinkPop)
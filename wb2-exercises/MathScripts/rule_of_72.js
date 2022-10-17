var rate = 6;
var savings = 5000;
var years = ( 72 / rate );
var finalValue = 2 * savings;

console.log(
    "At a " + rate + " interest rate, your savings account will be worth $" + finalValue.toFixed(2) + " in " + years.toFixed(1) + " years."
);
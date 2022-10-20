var payRate = 17.3;
var hoursWorked = 45;

var otRate = payRate * 1.5;
var otpPay;
var grossPay;

if (hoursWorked > 40) {
    otpPay = (hoursWorked - 40) * otRate
    grossPay = otpPay + (40 * payRate)
}
else {
    grossPay = hoursWorked * payRate
}

console.log(grossPay);
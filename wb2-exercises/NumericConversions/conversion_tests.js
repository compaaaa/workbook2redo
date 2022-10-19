// Description: This script tests various numeric
// conversion techniques

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

testa = parseInt(a);
testb = parseInt(b);
testc = parseInt(c);
testd = parseInt(d);

console.log(testa, testb, testc, testd)

testa = parseFloat(a);
testb = parseFloat(b);
testc = parseFloat(c);
testd = parseFloat(d);

console.log(testa, testb, testc, testd)

testa = Number(a);
testb = Number(b);
testc = Number(c);
testd = Number(d);

console.log(testa, testb, testc, testd)

a = +a;
b = +b;
c = +c;
d = +d;

console.log(a, b, c, d)
console.log('This is our first node script.');

console.log('Printig factorial of 5...');
var f = 1;
for(var i=1; i<=5; i++) {
    f *= i;
}
console.log('Factorial of %s is %s', 5, f);

// to run this script, 
// CD into examples folder
// node ex01.js
var fact = require('./lib/math-utils').factorial;
var isPrime = require('./lib/math-utils').isPrime;
// require is a function that loads a module.
// The exported value from the module can be collected into a 
// local variable here.

var n = 12;
var f = fact(n);

console.log(`Factorial of ${n} is ${f}.`);

console.log('list of all prime numbers from 1 to 50...');
for (var i = 1; i <= 50; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

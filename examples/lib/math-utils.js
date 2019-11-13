// Every JS file is a module
// A module can define members: variables, functions and/or classes
// All of these members are considered as private to the module itself,
// unless exported out from here.

function factorial(num) {
    var f = 1;
    for (var i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
}

function isPrime(num) {
    var limit = num / 2;
    for (var i = 2; i <= limit; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// nodejs defines a global variable called "module", 
// by assiging module.exports = ...
// we can export members from here (making them public)

module.exports = {}; // this is not required since module.exports by default is an empty object

module.exports.factorial = factorial; // a new property 'factorial' is added to module.exports

module.exports.isPrime = isPrime; // a new property 'isPrime' is added to module.exports

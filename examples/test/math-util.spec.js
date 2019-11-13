var assert = require('assert'); // core module
var factorial = require('../lib/math-utils').factorial;

// test suite
// I call describe function, and describe will call my function
// passed 2nd parameter (hence called as callback function)
describe('testing math-util.factorial function', function () {

    // test case
    it('should test factorial of 5 is 120', function () { 
        assert.equal(1, 1); // making use of core module
        expect(factorial).toBeDefined();
        expect(1).toEqual(1); // making use of Jasmine's matchers
        expect(factorial(5)).toEqual(120);
    });
});
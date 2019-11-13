const subtotal = require('../lib/my-functions').subtotal;

describe('Testing subtotal async function', () => {

    it('should fail if filename is not a string', (done) => {
        subtotal(100, (err, result) => {
            expect(err).toBeDefined();
            expect(result).toBe(null);
            done(); // inform jasmine that assertions are done.
        });
    });

});
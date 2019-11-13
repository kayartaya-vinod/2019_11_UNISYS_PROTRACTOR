const subtotal = require('../lib/my-functions').subtotal;
const path = require('path');

describe('Testing subtotal async function', () => {

    it('should fail if filename is not a string', (done) => {
        subtotal(100, (err, result) => {
            expect(err).toBeDefined();
            expect(result).toBe(null);
            done(); // inform jasmine that assertions are done.
        });
    });

    it('should pass for a valid filename', (done) => {
        let filename = path.join(__dirname, '..', 'data1.txt');
        subtotal(filename, (err, result)=>{
            expect(err).toBeNull();
            expect(result).toBeDefined();
            expect(result.count).toBeDefined();
            expect(result.sum).toBeDefined();
            expect(result.avg).toBeDefined();
            expect(result.count).toEqual(5);
            expect(result.sum).toEqual(10874);
            expect(result.avg).toEqual(2174.8);
            done();
        });
    });
});
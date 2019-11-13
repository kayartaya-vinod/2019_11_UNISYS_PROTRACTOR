const fibo = require('../lib/my-functions').fibo;
const assert = require('assert'); // core module
const should = require('chai').should();

describe('Testing fibo function', ()=>{

    it('should give an error for negative index', (done)=>{
        fibo(-5)
            .catch(err=>{
                assert.equal(err, 'Invalid index. Must be >= 0');
                done();
            });
    });

    it('should get fibo numbers for positive indices', async ()=>{
        var f = await fibo(5);
        f.should.be.a('number').to.equal(5);
        f = await fibo(6);
        f.should.be.a('number').to.equal(8);
        f = await fibo(7);
        f.should.be.a('number').to.equal(13);
    });
});
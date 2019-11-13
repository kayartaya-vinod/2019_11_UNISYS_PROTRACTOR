const path = require('path');
const subtotal = require('./lib/my-functions').subtotal;

console.log('start of script');
const filename = path.join(__dirname, 'data1.txt');
subtotal(filename, (err, result) => {
    if (err) {
        throw err;
    }
    console.log('result is', result);
});
console.log('end of script');
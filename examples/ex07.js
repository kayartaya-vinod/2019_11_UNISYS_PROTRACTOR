const fibo = require('./lib/my-functions').fibo;

console.log('Start of script');

fibo(15)
    .then(elem => console.log(elem))
    .catch(err => console.error(err));

console.log('End of script');
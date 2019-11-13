// const execAfterDelay = require('./lib/my-functions').execAfterDelay;
const sleep = require('./lib/my-functions').sleep;

console.log('start of script')
setTimeout(someFunction, 1000);
console.log('returned from execAfterDelay');
sleep(5000);
console.log('end of script');



function someFunction() {
    console.log('Callback being executed...');
}
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'lib', 'my-functions', 'index.js');

console.log('start of script');
// const content = fs.readFileSync(filename, 'utf-8');
// console.log(content);
fs.readFile(filename, 'utf-8', (err, content) => {
    if (err) {
        throw err;
    }
    console.log(content);
});
console.log('end of script');

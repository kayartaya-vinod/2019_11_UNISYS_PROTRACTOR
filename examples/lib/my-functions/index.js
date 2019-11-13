const fs = require('fs');

const sleep = (duration) => {
    const startTime = Date.now();
    while ((Date.now() - startTime) < duration);
}

module.exports.sleep = sleep;

module.exports.execAfterDelay = (callback, duration = 1000) => {
    if (typeof callback !== 'function') {
        throw new Error('callback must be a function!');
    }
    if (typeof duration !== 'number') {
        throw 'duration must be a number!';
    }
    sleep(duration);
    callback();
}

/**
 * This is a function that takes two argments: 
 * 1. filename --> absolute/relative path of the text file
 * 2. callback --> a callback function to recieve the err/result
 * This being an asynchronous function, must have callback function
 * as the last parameter (error first callback)
 */
module.exports.subtotal = (filename, callback) => {
    if (typeof callback !== 'function') {
        throw new Error('Callback must be a function!');
    }
    // making an asynchronous function using setTimeout
    setTimeout(() => {
        // from inside of this function, DO NOT throw any errors,
        // but pass the error info via the callback
        if (typeof filename !== 'string') {
            callback('filename must be a string!', null); // 1st arg-> error, 2nd arg->subtotal
            return;
        }

        fs.readFile(filename, 'utf-8', (err, content) => {
            if (err) {
                callback(err, null);
                return;
            }
            // process the content
            let lines = content.split('\n');
            var count = 0, sum = 0;
            lines.forEach((line) => { 
                if(!isNaN(line)) {
                    sum += parseFloat(line);
                    count++;
                }
            });
            var retval = {};
            retval.count = count;
            retval.sum = sum;
            retval.avg = sum/count;
            callback(null, retval);
        });

    }, 3000);
}
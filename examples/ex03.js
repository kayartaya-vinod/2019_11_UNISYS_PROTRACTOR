var os = require('os');
console.log('typeof os is', typeof os);
console.log('Your laptop has', os.cpus().length, 'CPUs');
console.log(os.cpus()[0])

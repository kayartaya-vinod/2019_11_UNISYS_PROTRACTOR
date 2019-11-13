exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub/',
    specs: [
        'test/*.spec.js'
    ],
    multiCapabilities: [
        {
            browserName: 'chrome'
        },
        // {
        //     browserName: 'firefox'
        // },
        // {
        //     browserName: 'safari'
        // }
    ],
    onPrepare: ()=>{
        global.author = 'Vinod Kumar';
        global.email = 'vinod@vinod.co';
        global.fs = require('fs');
    },
    directConnect: true
}
async = require('async');
fs = require('fs');

async.map(
    ['./README.md', './step-lab.js', './q-lab.js'],
    fs.readFile,
    function(err, files) {
        console.log(files.join('\n'));
    } 
);


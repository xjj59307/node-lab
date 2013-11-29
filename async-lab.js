async = require('async');
fs = require('fs');

var print = function(value, callback) {
    setTimeout(function() {
        console.log(value);
        callback();
    }, 2000);
};

/*
async.series([
    print.bind(undefined, "first"),
    print.bind(undefined, "second"),
    print.bind(undefined, "third"),
    print.bind(undefined, "fourth"),
    print.bind(undefined, "fifth")
]);

async.map(
    ['./README.md', './step-lab.js', './q-lab.js'],
    fs.readFile,
    function(err, files) {
        console.log(files.join('\n'));
    } 
);
*/

var queue = async.queue(function(task, callback) {
    callback(1, 2, 3, 4, 5);
    queue.push('queue');
});

queue.push('queue', function() {
    var args = Array.prototype.slice.apply(arguments);
    args.forEach(function(arg) {
        console.log(arg);
    });
});

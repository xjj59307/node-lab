var Q = require('q');
var fs = require('fs');

// How to interface with asynchronous function that are callback-based
// instead of promise-based.
function read(value) {
    var deferred = Q.defer();
    fs.readFile('./README.md', 'utf8', function(error, text) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(value + ':' + text);
        }
    });
    return deferred.promise;
}

Q.all([1, 2, 3].map(read))
.done(function(result) {
    console.log(result);
});

Q.all([
    read(1),
    read(2)
])
.spread(function(x, y) {
    console.log(x, y);
})
.done();


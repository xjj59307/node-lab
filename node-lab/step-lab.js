var Step = require('step');
var fs = require('fs');

Step(
  function read() {
    fs.readFile('./node_modules/step/README.markdown', this);
  },
  function show(err, text) {
    if (err) throw err;
    console.log(text);
  }
);

// Step can't ensure following statements to be executed after itself. 
console.log('last print');


var JSON = require('json-serialize');
var util = require('util');

var me = { name: 'xu' };
var him = { friend: me };

var json = JSON.serialize(him);
var deserialized_him = JSON.deserialize(json);

console.log(util.inspect(deserialized_him));
console.log(deserialized_him.friend === me);

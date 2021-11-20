const os = require('os');

const {userName, sayHi} = require('./test');

const name = 'Tommy';

console.log(sayHi(name))

console.log(os.platform(), os.release());

module.exports = name;
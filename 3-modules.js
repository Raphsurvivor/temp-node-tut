// CommonJS, every file is module (by default)
// Modules - Encapsolated Code (only share minimum)
const names = require('./4-names.js');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// when require is called it also runs the code
require('./7-mind-grenade');

console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
const people = ['mario', 'luigi', 'yoshi', 'waluigi', 'peach']
const age = [32, 24, 12, 18, 23];

// modules need to be explicitly exported before it is usable
module.exports = {
    people: people,
    age: age
};

const os = require('os');   // a core module 
console.log(os.platform(), os.homedir());
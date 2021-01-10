#!/usr/bin/env node

var jokes = require('./App');
(async () => {
console.log(await jokes(process.argv[2] || 'Programming'))
})();
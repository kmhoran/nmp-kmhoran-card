#!/usr/bin/env node
const minimist = require("minimist");
const pkg = require("./card");

const options = {
  alias: { json: 'j' }
}

const argv = minimist(process.argv.slice(2), options);

console.log(pkg(argv));
// console.log(boxen('kmhoran', {padding: 1}));

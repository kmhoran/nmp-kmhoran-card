#!/usr/bin/env node
const boxen = require('boxen');
const minimist = require("minimist");
const pkg = require("./index");

const options = {
  alias: { json: "j" }
};
const argv = minimist(process.argv.slice(2), options);

// console.log(boxen(pkg(argv), {padding: 1}));
console.log(boxen('kmhoran', {padding: 1}));

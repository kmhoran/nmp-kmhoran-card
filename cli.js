#!/usr/bin/env node
const boxen = require('boxen');
const minimist = require("minimist");
const cli = require('commander');
const pkg = require("./index");

cli
    .version('1.0.3')
    .option('-j, --json', 'json output')
    .parse(process.argv)

const options = {
  alias: { json: "j" }
};
const argv = minimist(process.argv.slice(2), options);

// console.log(pkg(argv));
console.log(boxen('kmhoran', {padding: 1}));

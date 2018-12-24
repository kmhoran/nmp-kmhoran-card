#!/usr/bin/env node
process.chdir(__dirname);
import program from "commander";
import { printCard } from "./card";

module.exports = () => {};

program.version("1.0.4");

program
  .command("*")
  .description("return business card")
  .action(printCard(process.argv));

program.parse(process.argv);

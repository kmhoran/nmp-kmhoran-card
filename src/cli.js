#!/usr/bin/env node

import program from "commander";
import { printCard } from "./card";

module.exports = () => {};

program.version("1.0.3");

program
  .command("*")
  .description("return business card")
  .action(printCard(process.argv));

program.parse(process.argv);

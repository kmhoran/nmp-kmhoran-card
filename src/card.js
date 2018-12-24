import boxen from "boxen";
const { render } = require("prettyjson");
const myInfo = require("./lib/myInfo");

const renderOpts = {
  dashColor: "cyan",
  keysColor: "blue",
  stringColor: "green"
};

export function printCard(args=[], returnJson=false) {
  const flag = args[2];
  if (flag && (flag.toLowerCase() == "-h" || flag.toLowerCase() == "--help")) {
    return;
  }
  
  console.log(boxen(render(myInfo, renderOpts), { padding: 1 }));
  console.log("use --help for more options");
}

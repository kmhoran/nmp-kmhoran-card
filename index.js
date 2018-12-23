const { render } = require("prettyjson");
const myInfo = require("./lib/myInfo");

const renderOpts = {
  dashColor: "cyan",
  keysColor: "blue",
  stringColor: "green"
};

module.exports = (args) => !args || !args.json ? render(myInfo, renderOpts): JSON.stringify(myInfo)

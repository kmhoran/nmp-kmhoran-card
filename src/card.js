const boxen = require("boxen");
const { render } = require("prettyjson");
const myInfo = require("./lib/myInfo");

const renderOpts = {
  dashColor: "cyan",
  keysColor: "blue",
  stringColor: "green"
};

module.exports = args => {
  if (!args || !args.json)
    return boxen(render(myInfo, renderOpts), { padding: 1 });

  return JSON.stringify(myInfo);
};

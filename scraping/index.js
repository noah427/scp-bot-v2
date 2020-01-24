const fc = require("./fetchContent");
const parse = require("./parsing");
const count = require("./counter");

module.exports = number => {
  return parse(fc(count(number)));
};

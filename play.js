const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let connected = connect();

setupInput(connected);

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

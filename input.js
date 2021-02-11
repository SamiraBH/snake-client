let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  let handleUserInput = function(){
   stdin.on('data', input => {
     //console.log(input)
     if (input === '\u0003') {
       process.exit();
     }

  module.exports = { setupInput };
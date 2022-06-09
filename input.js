let connection;
const {sayingObj, moveObj} = require('./constants');
 
//eventhandler manages the event that happens in this case its key binding 'w''a's''d' and ASCII for Ctrl+C
const handleUserInput =  (data) => {
  if (data === '\u0003') {  //'\u0003' = CTRL+C
    console.log("Exiting game...");
    process.exit();
  }
 
  let keysArr = Object.keys(moveObj); 
  if (keysArr.includes(data)) {
    connection.write(`Move: ${moveObj[data]}\n`);
    console.log(`${moveObj[data]} was pressed.`); 
  let sayingArr = Object.keys(sayingObj);
  if (sayingArr.includes(data)) {
    connection.write(`Say: ${sayingObj[data]}\n`);
  }
 
     
};
 
const setupInput = function(conn) {
  connection = conn;
  // setup interface to handle user input from stdin
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
     
  //eventlistener awaits for the event to fire
  stdin.on("data", handleUserInput); //.on is the eventListener, data is the specific event listening for and handleUserInput is the invocation of the eventHandler, which ONLY gets invoked when event fires.
  return stdin;
};
 
module.exports = {setupInput};

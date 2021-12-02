const IP = "165.227.47.243";
const PORT = 50541;
let moveObj = {
  w: "up",
  d: "right",
  s: "down",
  a: "left"
};

let sayingObj = {
  r: 'catch me',
  t: 'too slow',
  y: 'snakes?',
  u: 'Snakes where?'
};

module.exports = {
  IP,
  PORT,
  sayingObj,
  moveObj
};
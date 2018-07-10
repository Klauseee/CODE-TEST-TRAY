const fs = require('fs');
// get input
const input = fs.readFileSync('./input.txt', { encoding: 'utf8'});
const rows = input.split('\n'); // split on each line break

const dimensions = rows[0];
const hooverPosition = { x: rows[1][0], y: rows[1][2] };
const instructions = rows[rows.length - 2].split(''); // array keeps taking white space from end of txt file

const movements = {
  N: () => {
    if(hooverPosition.y < dimensions[2]) hooverPosition.y ++;
  },
  E: () => {
    if(hooverPosition.x < dimensions[0]) hooverPosition.x ++;
  },
  S: () => {
    if(hooverPosition.y > 0) hooverPosition.y --;
  },
  W: () => {
    if(hooverPosition.x > 0) hooverPosition.x --;
  }
};

// run through each instruction and make the relevant movement
instructions.forEach(instruction => {
  movements[instruction]();
});

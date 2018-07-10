const fs = require('fs');
// get input
const input = fs.readFileSync('./input.txt', { encoding: 'utf8'});
const rows = input.split('\n'); // split on each line break

const dimensions = rows[0];
const hooverPosition = { x: rows[1][0], y: rows[1][2] };
const instructions = rows[rows.length - 2].split(''); // array keeps taking white space from end of txt file

const httpx = require('httpx');
const { bypass } = require('hcapbypass');
const randomstring = require('randomstring');

function randomChar(length) {
  return randomstring.generate({
    length: length,
    charset: 'alphabetic' #vou terminar o código depois 
  });
} 

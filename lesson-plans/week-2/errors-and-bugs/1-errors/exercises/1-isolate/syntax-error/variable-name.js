

'use strict';

console.log('--- in execution phase ---');



/*
  environment: chrome

  name: Uncaught SyntaxError:
  message: Unexpected number

  location: line 25, column 7

  life cycle: execution phase

  the mistake: variable name can not start with a number.

  the fix(es): using three instead of number
*/


const three = 'three'; 
console.log (three)


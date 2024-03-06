

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: Uncaught SyntaxError
  message: Invalid or unexpected token

  location: line 23, column 11

  life cycle: creation phase

  the mistake: string can not be in two lines

  the fix(es): remove the line break
*/

const a = 'this is two lines';



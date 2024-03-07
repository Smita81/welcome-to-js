

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name:Uncaught SyntaxError
  message:Invalid left-hand side in assignment

  location:line 25, column 1

  life cycle: execution phase 

  the mistake: boolean value assigned as variable name

  the fix(es): with correct assigned value and variable
*/

let isHappy = false;

isHappy = true;
console.log(isHappy)


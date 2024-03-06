'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome, Browser
  name: Uncaught ReferenceError
  message: Welf is not defined

  location:line 20, column 6

  life cycle: execution phase

  the mistake: using a variable before it is declared or defined

  the fix(es): declare the variable is undefined
*/

let welf = 'ingrad';

console.log(welf);

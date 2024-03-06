'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Uncaught ReferenceError
  message: 'tomatoes' before initialization

  location: line 20, column 13

  life cycle: execution phase 

  the mistake:  using a variable before it is declared or defined

  the fix(es): declare the variable is undefined
*/

let tomatoes = 'fresh';

console.log(tomatoes);



'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Uncaught SyntaxError
  message: Identifier 'tree' has already been declared

  location: line 22, column

  life cycle: execution phase

  the mistake: repeating variable

  the fix(es): using variable once
*/

let tree = 'oak';
 tree = 'birch';
 console.log(tree)
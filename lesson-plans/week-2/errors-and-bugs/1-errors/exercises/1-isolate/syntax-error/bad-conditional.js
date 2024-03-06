

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: Uncaught SyntaxError
  message:  Unexpected token '{'

  location: line 27, column 30

  life cycle: creation phase

  the mistake: syntax error missing with if in else-if (else is with condition cant use without if)

  the fix(es): use the correct syntax
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}



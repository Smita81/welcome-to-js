

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: Uncaught SyntaxError
  message: Unexpected string

  location:line 23 column 42

  life cycle: creation phase

  the mistake: string used in wrong way

  the fix(es): used "" instead of '
*/

const quotesInQuotes = "remind yourself 'i can do this!' at least once a day";



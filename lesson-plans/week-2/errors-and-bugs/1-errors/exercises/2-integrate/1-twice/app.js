// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: Uncaught SyntaxError
  message: Unexpected token '+'
  location: line 32, column 16

  life cycle: creation phase

  the mistake: missing '=' in line 32

  the fix(es): replaced + by = 
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});

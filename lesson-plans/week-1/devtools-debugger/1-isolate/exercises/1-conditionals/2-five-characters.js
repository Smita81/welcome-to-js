'use strict';

/*let input = prompt('enter something with 5 characters:');

let message = '';
if (input === null) {
  message = ':(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

let Input = Number;
Input = prompt('enter something with 4 numbers:');
let info = '';

// info = 'thank you'; // always show thank you
if (Input.length > 4) {
  info = 'too long';
} else if (Input.length < 4) {
  info = 'too short';
} else if (Input.length === 4) {
  info = 'thank you!';
} else {
  info = ':('; // this will never executed
}

alert(info);
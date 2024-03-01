'use strict';

/*let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/


let Input;

while(!Input || Input.length !== 10) {
  let A = prompt('enter something with 10 characters:');
  let B = prompt('enter something with 10 characters:');

  if (A && B) {
    Input = A + B;
  } else {
    alert ('you need to enter something');
  }
}

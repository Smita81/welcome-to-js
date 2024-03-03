'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

/*let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

let hyphenAfter = '';
for (let char of text) {
  hyphenAfter = hyphenAfter + char + '-';

} 
alert(hyphenAfter);

let hyphenBetween = '';
for (let char of text) {
  hyphenBetween += char + '-';
}
alert(hyphenBetween);
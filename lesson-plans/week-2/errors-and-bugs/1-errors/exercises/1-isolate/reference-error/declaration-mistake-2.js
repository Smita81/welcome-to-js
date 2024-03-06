'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Uncaught ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: line 24, column 19

  life cycle: execution phase

  the mistake: using a variable before it is declared or defined

  the fix(es): declare the variable is undefined
*/


const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);

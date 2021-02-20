// 'use strict';

// alert ("I'm Javascript!");
// alert ('Hello');
// alert ('World');
// comments do not effect its execution. single line comments.
/* alert(3+
    1
    +2); */
/* multi line comments */

/* let message;
message = 'Hello!';//store the string
alert(message); */

/* let n_message = 'Bye!';
alert(n_message); */

/* let user ='John';
let age = 25;
let message ='Hello'; */

/* let user ='John', 
age =25, 
message ='Bye'; */

// comma first style
/* let user ='John' 
    , age =25, 
    , message ='Bye';

    function clickme(event){
        do a thing
    }
*/
// let num = 5;
// alert(num);

// const myBirthday = '12.18.1974';
// alert (myBirthday);

// const COLOR_RED ='#F00';

// let color = COLOR_RED;
// alert(color);

// let admin;
// let name = 'John';

// admin = name;
// alert(admin);

// let isGreater = 4>1;
// alert(isGreater);

// let fname = prompt( "What is your name?", 'first name');
// alert( `You name is ${fname}`);

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// alert("6"/"2");

// let str = "123"
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);

/* let year = prompt('In what year were you born?');

if (year < 1974) {
  alert('You are old!');
} else if (year > 2000) {
  alert ('You are young.');
} else {
  alert('you are middle age.');
}
*/

/* let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
   accessAllowed = true;
} else {
   accessAllowed = false;
}
alert(accessAllowed);

*/

// Ternary for above code - syntax - let result = condition ? value1 : value 2;

// let accessAllowed = age > 18 ? true : false;

/* let age = prompt('age', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert(message);
*/

/* let value = prompt ('What is the "official" name of Javascript?', '');
if (value == 'ECMAScript') {
   alert ('Right!');
} else {
   alert ("You don't know? EcmaScript!");
}
*/

/* let value = prompt ('enter a number','');

if (value > 0){
    alert('1');
} else if (value < 0) {
   alert('-1');
    } else {
    alert('0');
    }
*/

/* let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// rewrite above code to ternary

let result = (a + b < 4) ? 'Below' : 'Over'; 

*/

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
// ternary 

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == ' ') ? 'No Login' : ' ';

*/

/*

let firstName = '';
let lastName = '';
let nickName = '';

alert( firstName || lastName || nickName || "Anon
ymous");

if (!(age >= 14 && <= 90);
if ( age < 14 || > 90);

*/

/* let loginName = prompt("Who's there?", '');

if (loginName === 'Admin') {

  let passWord = prompt('Password?', ''); 

  if (passWord = 'TheMaster') {
   alert('Welcome!');
  } else if (passWord === '' || passWord === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
    
} else if (loginName === '' || loginName === null) {
  alert('Canceled');
} else {
  alert("I don't know you.");
}
*/

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
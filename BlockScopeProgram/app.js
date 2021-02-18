/* var name = 'Marcin';

if(name === 'Marcin'){
  var hobbies = ['Sport', 'Cooking'];
  console.log(hobbies);
}

function greet(){
  var age = 30;
  var name = 'Manuel';
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet(); */

//With var you can access variable even if you used it in
//if instructions and loops.

//With let and const you have to remember it only exist
//in block of curly brackets, not in global scope.


//"Hoisting"

'use strict'; //With this you have to write clean code

console.log(userName); //With var undefined, with let error

var userName = 'Max'; 
'use strict';

//////////////////////////////////////////////////////////////
// Scoping in Practice
//////////////////////////////////////////////////////////////

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       // creating NEW variable with the same as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Elmar';
// calcAge(1991);

// console.log(age);
// printAge();

//////////////////////////////////////////////////////////////
// Hoisting and TDZ in Practice
//////////////////////////////////////////////////////////////

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Elmar';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products  deleted!');
}

// What is the conclusion of all this?
// Well, as a first step, as I told you many times
// just don't use var to declare variables.
// Use const most of the time to declare variables
// and let, if you really need to change
// the variable later.
// Also in order to write clean code,
// you should declare your variables
// at the top of each scope.
// That will just make your code
// at least look a little bit better.
// Finally, always declare all your functions first
// and use them only after the declaration.
// And this applies to all types of functions,
// even function declarations, which are hoisted.
// So you could use function declarations
// before you declare them,
// but still just don't do that it's just not clean.
// Okay, so what I just told you
// are the best practices,
// not the rules of how it works in JavaScript.

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

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

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Elmar';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products  deleted!');
// }

// // What is the conclusion of all this?
// // Well, as a first step, as I told you many times
// // just don't use var to declare variables.
// // Use const most of the time to declare variables
// // and let, if you really need to change
// // the variable later.
// // Also in order to write clean code,
// // you should declare your variables
// // at the top of each scope.
// // That will just make your code
// // at least look a little bit better.
// // Finally, always declare all your functions first
// // and use them only after the declaration.
// // And this applies to all types of functions,
// // even function declarations, which are hoisted.
// // So you could use function declarations
// // before you declare them,
// // but still just don't do that it's just not clean.
// // Okay, so what I just told you
// // are the best practices,
// // not the rules of how it works in JavaScript.

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

////////////////////////////////////////////////////////////////////
// The this Keyword in Practice
////////////////////////////////////////////////////////////////////

// // So if you're not in strict mode,
// // this will actually point
// // to the global object,
// // which in case of the browser
// // is the window object.
// // And that can be very problematic
// // and so,
// // this is yet another very good reason
// // to always use strict mode.

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };

// calcAgeArrow(1980);

// // Okay. That's why I started by showing you this one here.
// // So in this case, this, this keyword here will simply point
// // to the disc keyword in the global scope.
// // And so therefore it will point
// // to window and like here in this normal function
// // which does actually get it's own disc keywords
// // it's simply as undefined here
// // but it is its own this keyword while this one here

// const elmar = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// elmar.calcAge();

// // So when we have a method call, the this keyword insight
// // of the method will be the object that is calling the method.

// const matilda = {
//   year: 2017,
// };

// // and this is called to method borrowing.
// // So we basically borrowed here the method
// // from one object to the other.
// matilda.calcAge = elmar.calcAge;
// matilda.calcAge();

// // And so this proves exactly what I
// // was just telling you before
// // which is the fact that the disc keyword always points
// // to the object that is calling the method.

// // in the last video that the disc keyword is really dynamic.
// // It's not static
// // and it depends on how the function is called.

// const f = elmar.calcAge;
// f();

// // So this happens because this F
// // function here is now just a regular function call
// // right? It is not attached to any object.
// // There is no owner of this F function
// // anymore here at this point.
// // And therefore it is just a regular
// // function call

///////////////////////////////////////////////////
// Regular Functions vs. Arrow Functions
///////////////////////////////////////////////////

// // var firstName = 'Matilda';// Not using var

// const elmar = {
//   firstName: 'Elmar',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     //solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
//   // greet: function () {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);
//   // },
// };

// elmar.greet();

// // And the reason is exactly the one that I mentioned
// // in the last lecture,
// // which is the fact that an arrow function
// // does not get its own this keyword,
// // it will simply use the this keyword from its surroundings.
// // So in other words, its parents this keyword,
// // and the parent scope of this greet method
// // is the global scope. Okay?

// // So from this example, the big takeaway
// // is that as a best practice,
// // you should never ever use an arrow function as a method.
// // And in my opinion, that's even true if you're not even using
// // the this keyword in a particular method.
// // Because if you have this rule of never using an arrow
// // function as a method, then you never have to think about
// // which type of function you should use
// // You will always just use a normal function expression,

// elmar.calcAge();

// // Now some people consider that this is a bug in JavaScript
// // but in my opinion, it's not really.
// // It's just how the this keyword works.
// // It's a clear rule that a regular function call
// // has the this keyword set to undefined.
// // And so that's just what is happening here.
// // Now there are two solutions to this problem.
// // The first solution is to use an extra variable
// // that we usually call self.
// // So outside of the function, let's say self
// // and then we set that to this.
// // Because here we are still outside
// // of this isMillennial function.
// // And so here, we still have access to this keyword
// // set to Elmar. Right?

// // So basically an arrow function inherits the this keyword
// // from the parent scope.

// // So in the video about execution context,
// // and the call stack,
// // we learned that functions also get access
// // to an arguments keyword.
// // So not just the this keyword, but also an arguments keyword.
// // Now, just like the this keyword, the arguments keyword
// // is only available in regular functions.
// // So let's create another function here.
// // So first an expression.

// //arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8, 12);

// // but then we get an error.
// // So arguments is not defined. All right.
// // So this was simply just to show you
// // that the arguments keyword exists,
// // but that it only exists in regular functions.
// // So in function expressions like this,
// // but also in function declarations,
// // but not in an arrow function.
// // But anyway, the arguments keyword is not that important
// // in modern JavaScript anymore,

////////////////////////////////////////////////////////////////////
// Primitives vs. Objects (Primitive vs. Reference Types)
////////////////////////////////////////////////////////////////////

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Elmar',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);

// Now, when we're talking about memory and memory management,
// it's usual to call primitives, primitive types
// and objects reference types because of the different way
// in which they are stored in memory.
// Next, we need to remember about the JavaScript engine.
// So the engine has two components, the call stack,
// where functions are executed and to heap where objects
// are stored in memory.
// And that's right, all of objects,
// or in other words, reference types
// will get stored right in the memory heap.
// And I mentioned that when we first talked about the engine,
// but now you will finally learn how that actually works.
// On the other hand, primitives or primitive types
// are stored in the call stack.
// And with that, I mean that primitive types
// are stored in the execution contexts
// in which they are declared.
// But for the sake of simplicity,
// let's ignore that detail now.
// And simply say that primitive types
// are stored in a call stack
// because that's where execution context run.

// Please see pdf lecture

// because we're actually not changing the value in memory
// for the Friend identifier, it is still D30F.
// So the reference to the object.
// All we did was to change the value in the heap,
// and that's not a problem.
// So it's a misconception that all variables declared
// with const are immutable.
// In fact, that is only true for primitive values,
// but not for reference values.

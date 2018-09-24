/*** Prevents duplicate parameters from being declared ***/

Without the "use strict" directive;
function doSomething(p1, p1) {
  console.log(p1);
  return p1;
}

doSomething("hey"); // undefined is printed to the screen;
doSomething("hey", "hello"); // "hello" is printed to the screen;

// With the "use strict" directive;
function maybeDoSomething(p1, p1) {
  // "use strict"; // comment this back in to test;
  console.log(p1);
  return p1;
}

maybeDoSomething("hey"); // SyntaxError, duplicate parameter name not allowed in this context;
maybeDoSomething("hey", "hello"); // SyntaxError, duplicate parameter name not allowed in this context;

/*** Prevents assigning values to variables that have not been declared yet ***/

// Without the "use strict" directive;
x = 2; // this is allowed;

// With the "use strict" directive;
// "use strict"; // comment this back in to test;
x = 2; // ReferenceError, x is not defined;

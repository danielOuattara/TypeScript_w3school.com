/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/ 

------------------------------------------------------*/

/* TypeScript Special Types
============================

TypeScript has special types that may not refer to 
any specific type of data.


Type: any
---------
'any' is a type that disables type checking and 
effectively allows all types to be used.

The example below does not use 'any' and will throw 
an error: */

let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

/* Setting 'any' disables type checking:*/

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

/* 
'any' can be a useful way to get/pass errors since it 
disables type checking: TypeScript will not be able to 
provide type safety, and tools which rely on type data, 
such as auto completion. Remember, it should be avoided 


Type: unknown
--------------

'unknown' is a similar, but safer alternative to 'any'.

TypeScript will prevent 'unknown' types from being used */

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };

w.runANonExistentMethod(); // Error: Object is of type 'unknown'.

// How can we avoid the error when we don't know the type?

// Solution
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check
// in the if to secure our type and have a safer casting

/* 
Compare the example above to the previous example, with any.

unknown is best used when you don't know the type of data 
being typed. To add a type later, you'll need to cast it.

Casting is when we use the "as" keyword to say property or 
variable is of the casted type.


Type: never
-----------

'never' effectively throws an error whenever it is defined.*/
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

/* 
'never' is rarely used, especially by itself, its primary use 
is in advanced generics.


Type: undefined & null
------------------------

'undefined' and 'null' are types that refer to the JavaScript 
primitives 'undefined' and 'null' respectively. */

let y: undefined = undefined;
let z: null = null;

/* These types don't have much use unless strictNullChecks is 
enabled in the tsconfig.json file. */

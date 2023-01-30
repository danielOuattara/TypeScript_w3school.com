/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/ 

------------------------------------------------------*/

/*TypeScript Union Types
==========================================

Union types are used when a value can be more than a single type.

Such as when a property would be string or number.


Union | (OR)
-------------
Using the | we are saying our parameter is a string or number: */

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");
//

/* Union Type Errors
----------------------
Note: you need to know what your type is when union types 
are being used to avoid type errors: */

function printStatusCodeAgain(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`);
  // error: Property 'toUpperCase' does not exist ontype 'string | number'.
}

/* 
In our example we are having an issue invoking toUpperCase() as 
its a string method and number doesn't have access to it.  */

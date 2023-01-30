/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/ 

------------------------------------------------------*/

/*TypeScript Functions
======================== 

TypeScript has a specific syntax for typing function 
parameters and return values.

Return Type
-------------

The type of the value returned by the function can be 
explicitly defined */

// the `: number` here specifies that this function
// returns a number

function getTime(): number {
  return new Date().getTime();
}

/* 
If no return type is defined, TypeScript will attempt
to infer it through the types of the variables or 
expressions returned.


Void Return Type
-----------------
The type 'void' can be used to indicate a function doesn't 
return any value. */

function printHello(): void {
  console.log("Hello!");
}

/* 
Parameters
-----------
Function parameters are typed with a similar syntax as variable 
declarations. */

function multiply(a: number, b: number) {
  return a * b;
}

/* 
If no parameter type is defined, TypeScript will default to 
using any, unless additional type information is available 
as shown in the Default Parameters and Type Alias sections 
below.


Optional Parameters
--------------------

By default TypeScript will assume all parameters are required, 
but they can be explicitly marked as optional. */

// the `?` operator here marks parameter `c` as optional

function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

/*
Default Parameters
-------------------

For parameters with default values, the default value goes 
after the type annotation:*/

function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

/* 
TypeScript can also infer the type from the default value.

//
Named Parameters
-----------------

Typing named parameters follows the same pattern as typing 
normal parameters. */

function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

/*
//
Rest Parameters
-----------------

Rest parameters can be typed like normal parameters, but 
the type must be an array as rest parameters are always 
arrays. */

function addAgain(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

/*
//
Type Alias
-----------

Function types can be specified separately from functions 
with type aliases.

These types are written similarly to arrow functions */

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically
// gets assigned the type `number` from the type `Negate`

const negateFunction: Negate = (value) => value * -1;

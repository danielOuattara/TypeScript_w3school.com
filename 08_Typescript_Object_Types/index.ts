/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/ 

------------------------------------------------------*/

/* TypeScript Object Types
========================== 

TypeScript has a specific syntax for typing objects. */

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

/* 
Object types like this can also be written separately, 
and even be reused, look at interfaces for more details.


Type Inference
---------------
TypeScript can infer the types of properties based on their 
values. */

const car_2 = {
  type: "Toyota",
};
car_2.type = "Ford"; // no error
car_2.type = 2; // Error: Type 'number' is not assignable to type 'string'.
//

/* Optional Properties
-----------------------
Optional properties are properties that don't have to be 
defined in the object definition. */

// Example without an optional property

const car_3: {
  type: string;
  mileage: number;
} = {
  type: "Toyota",
};
// Error: Property 'mileage' is missing in type '{ type: string; }'
// but required in type '{ type: string; mileage: number; }'.

car_3.mileage = 2000;
//-----------------------------------------------------------

// Example with an optional property

const car_4: { type: string; mileage?: number } = {
  type: "Toyota",
};
car_4.mileage = 2000;

/*
Index Signatures
------------------
Index signatures can be used for objects without a defined list 
of properties. */

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

/* 
Index signatures like this one can also be expressed with utility 
types like Record<string, number>.

Learn more about utility types like this in our TypeScript Utility
Types chapter.*/

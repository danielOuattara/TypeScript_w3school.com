/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/ 

------------------------------------------------------*/

/* TypeScript Enums
==================== 
An 'enum' is a special "class" that represents 
a group of constants (unchangeable variables).

Enums come in 2 flavors: string and numeric. 

Lets start with numeric.

Numeric Enums - Default
------------------------
By default, enums will initialize the first value 
to 0 and add 1 to each additional value:*/

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North;

console.log(currentDirection); // 0

// throws error as 'North' is not a valid enum
//currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.

/* Numeric Enums - Initialized
-------------------------------
You can set the value of the first numeric enum and 
have it auto increment from that:*/

enum CardinalDirections_2 {
  North = 1,
  East,
  South,
  West,
}

console.log(CardinalDirections_2.North); // 1
console.log(CardinalDirections_2.West); // 4

/* Numeric Enums - Fully Initialized
--------------------------------------
You can assign unique number values for each enum value. 
Then the values will not incremented automatically: */

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200

/* 
String Enums
--------------
Enums can also contain strings. This is more common than numeric 
enums, because of their readability and intent. */

enum CardinalDirections_3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
console.log(CardinalDirections.North); // North
console.log(CardinalDirections.West); // West

/* Technically, you can mix and match string and numeric 
enum values, but it is recommended not to do so. */

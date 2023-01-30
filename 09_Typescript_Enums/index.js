/*------------------------------------------------------
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
09 06 2022
TypeScript Tutorial : https://www.w3schools.com/typescript/

------------------------------------------------------*/
/* TypeScript Enums
====================
An 'enum' is a special "class" that represents
a group of constants (unchangeable variables).

Enums come in two flavors string and numeric.
Lets start with numeric.

Numeric Enums - Default
------------------------
By default, enums will initialize the first value
to 0 and add 1 to each additional value:*/
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection); // 0
// throws error as 'North' is not a valid enum
//currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.
/* Numeric Enums - Initialized
-------------------------------
You can set the value of the first numeric enum and
have it auto increment from that:*/
var CardinalDirections_2;
(function (CardinalDirections_2) {
    CardinalDirections_2[CardinalDirections_2["North"] = 1] = "North";
    CardinalDirections_2[CardinalDirections_2["East"] = 2] = "East";
    CardinalDirections_2[CardinalDirections_2["South"] = 3] = "South";
    CardinalDirections_2[CardinalDirections_2["West"] = 4] = "West";
})(CardinalDirections_2 || (CardinalDirections_2 = {}));
console.log(CardinalDirections_2.North); // 1
console.log(CardinalDirections_2.West); // 4
/* Numeric Enums - Fully Initialized
--------------------------------------
You can assign unique number values for each enum value.
Then the values will not incremented automatically: */
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200
/*
String Enums
--------------
Enums can also contain strings. This is more common than numeric
enums, because of their readability and intent. */
var CardinalDirections_3;
(function (CardinalDirections_3) {
    CardinalDirections_3["North"] = "North";
    CardinalDirections_3["East"] = "East";
    CardinalDirections_3["South"] = "South";
    CardinalDirections_3["West"] = "West";
})(CardinalDirections_3 || (CardinalDirections_3 = {}));
console.log(CardinalDirections.North); // North
console.log(CardinalDirections.West); // West
/* Technically, you can mix and match string and numeric
enum values, but it is recommended not to do so. */

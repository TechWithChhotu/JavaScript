// The data types defines the types of data is stored in js.
// # Number: to store a numerical value, either integer or decimal
let num = 10.5; //integer number
num = -34567856789;
console.log("Type of num var => ", typeof num);

// # bigInt: to store a big numerical value,
const biNum = BigInt(2 ** 53 + 1);
console.log("Type of biNum var => ", typeof biNum);

// # Boolean: represent true/false values and can be used for conditional statements like if-else
let boolVal = false;
boolVal = false;
console.log("Type of boolVal var => ", typeof boolVal);

// # String : Store or Represents textual information enclosed within double quotes(") or single quotes('
let str = "Hello World";
str += ", How are you?";
console.log("Type of str var => ", typeof str);

// #Symbol => Represents uniqueness
const sym = Symbol("foo");
// console.log(sym);
console.log("Type of sym var => ", typeof sym);

// # Null & Undefined: These two special data type has only one possible value.
// null => variable is null or empty
let serverResponsed = null;
console.log("Type of serverResponsed var =>", typeof serverResponsed);

// # undefined => it means variable value is not defined or initialize
let initialValue = undefined;
console.log("Type of initialValue var =>", typeof initialValue);

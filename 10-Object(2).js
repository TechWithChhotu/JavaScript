// ============>>>>>>>>>Object Custo<<<<<<<<<================
let user = new Object();
let user2 = {};
// console.log(user); // {}
// console.log(user2); //{}

user.id = "abc@123";
user.name = "ckumar";
user.isLogined = false;

// console.log(user);

// =============>>>>>>>>>To add object inside object(nested object)<<<<<<<<<=============
user.previousLoginDetails = {
  Month1: {
    week1: {
      date: "5/10/20",
    },
    week2: {
      date: "11/10/20",
    },
  },
  Month2: {
    week1: {
      date: "15/10/20",
    },
    week2: {
      date: "19/10/20",
    },
  },
};

// console.log(user);
// console.log(user.previousLoginDetails);
// console.log(user.previousLoginDetails.Month1);
// console.log(user.previousLoginDetails.Month1.week1);

// =============>>>>>>>>>To Concat two or more object<<<<<<<<================
const objA = { a: 4, ab: true };
const objB = { b: 5, bb: false };
const objC = { c: 6, bc: true };
// const objD = { ...objA, ...objB, ...objC }; //concat using(...) Operator
const objD = Object.assign(objA, objB, objC);
// console.log(objD);

const objAB = { a: 4, b: true };
const objBB = { a: 5, b: false };
const objCB = { a: 6, b: true };
const objDB = { ...objAB, ...objBB, ...objCB }; //concat using(...) Operator
// console.log(objDB);

const newobjA = { ab: 4, b: true };
const newobjB = { a: 5, b: false };
const newobjC = { a: 6, b: true };
const newobjD = { ...newobjA, ...newobjB, ...newobjC }; //concat using(...) Operator
// const newobjD = Object.assign(newobjA, newobjB, newobjC);
// console.log(newobjD);

//==============>>>>>>>>To rap all object in single object<<<<<<===============
// console.log({ newobjA, newobjB, newobjC });

// =============>>>>>>>>>>>Array of object<<<<<<<=============

const users = [
  { name: "chhtu", id: 101 },
  { name: "ravi", id: 102 },
  { name: "dibu", id: 103 },
  { name: "rahul", id: 104 },
];

// users.map((e) => console.log(e));
// users.forEach((e) => console.log(Object.keys(e)));
// users.forEach((e) => console.log(Object.values(e)));

// ==========>>>>>>>>>>>>>>TO check object property exist or not<<<<<<<<<==========
console.log(users[0].hasOwnProperty("name"));

// ==============How to use Symbols and declare<<<<<<<<=============
const mySym = Symbol("id");
let userObj = {
  [mySym]: 101, //Symbol used for declaring id
  name: "Rahul",
};
console.log(userObj);

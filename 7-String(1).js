//### four way to define string in js
let firstName = "Chhotu";
let lastName = "Kumar";
let profession = `Developer`; //string interpolation(backtics)

let address = new String("Sheikhpura, Bihar"); // string object

//### there are three way to access individual element
// # 1st way ===> using charAt() method
console.log("First character of address => ", address.charAt(0));

//# 2nd way ===> using index property or at() function (ES6)
console.log("First character of firstName => ", firstName.at(0));

//# 3rd way ===> using [indexNumber]
console.log("First character of profession => ", profession[0]);

let strings = "Chhotu@kumar +918920235468  jaimangla sheikhpura - 811107";
console.log("* Value of strings => ", strings);

// ### To find length of string uisng build in propertis => length and use it like this:
console.log(`\n* Length of strings var is `, strings.length);

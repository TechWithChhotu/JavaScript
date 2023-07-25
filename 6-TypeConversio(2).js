// ### Unary or Auto type conversion

// #
let num = 8;
num += "88";
console.log("Type of num", typeof num, " ,value ", num);

// #
let str = "123";
str += 456;
console.log("Type of num", typeof str, " ,value ", str);

// #
let str2 = "125";
str2 -= 2;
console.log("Type of num", typeof str2, " ,value ", str2);

//  #
let str3 = "125";
str3 *= 2;
console.log("Type of num", typeof str3, " ,value ", str3);

// #
let str4 = "125";
str4 /= 5;
console.log("Type of num", typeof str4, " ,value ", str4);

// -------------------------------------
// #
let str5 = "1235";
str5 = 5555;
console.log("Type of num", typeof str5, " ,value ", str5);

let num2 = 12;
num2 = "21";
console.log("Type of num", typeof num2, " ,value ", num2);

// similary, if let x = y, then x will be converted in typeof y

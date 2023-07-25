/*
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
and many more
*/

// # Converting Strings to Numbers
let stringNum = "123";
let numberNum = Number(stringNum);
console.log("Type of numberNum: ", typeof numberNum, "& value: ", numberNum);

// # Converting Numbers to Strings
let stringNum2 = String(numberNum);
console.log("Type of stringNum2: ", typeof stringNum, "& value: ", stringNum2);

// # Converting Booleans to Numbers
let boolVal = false;
let numBoolval = Number(boolVal);
console.log("Type of numBoolval: ", typeof numBoolval, "& value: ", numBoolval);

// # Converting Numbers to Booleans
let numBoolval2 = 1;
let boolVal2 = Boolean(numBoolval2);
console.log("Type of boolVal2: ", typeof boolVal2, "& value: ", boolVal2);

// # Converting Numbers to Dates
let date = new Date();
console.log("Type of date: ", typeof date, "& value: ", date);

let numDate = Number(date);
console.log("Type of numDate: ", typeof numDate, "& value: ", numDate);

// # Converting Numbers to Dates
let numDate2 = 125252564260;
let convertedDate = new Date(numDate2);
console.log(
  "Type of convertedDate: ",
  typeof convertedDate,
  "& value: ",
  convertedDate
);

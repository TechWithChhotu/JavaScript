// ### two way to define Numbers in js
let number = 200;
let anotherNumber = new Number(400); //this is object of number

// console.log(number);
// console.log(anotherNumber);

// ### Number Methods:
let string = anotherNumber.toString();
// console.log(typeof string);

// # toFixed(numberOfPrecisionDigit)
// console.log(anotherNumber.toFixed(2));

let num1 = 154.945;
let num2 = 154.545;
let num3 = 154.445;

// console.log(num1.toPrecision(3));
// console.log(num2.toPrecision(3));
// console.log(num3.toPrecision(3));
// console.log(num3.toPrecision(2));
// console.log(num3.toPrecision(4));

// ## LocalString
number = 25018900;
// console.log(number.toLocaleString()); // convert using usa standard
// console.log(number.toLocaleString("en-IN")); // convert using Indian standard

//**********************Maths**********************
// console.log(Math);

// console.log(Math.abs(-4)); //-ve value become +ve
// console.log(Math.ceil(2.47)); // round up the decimal point
// console.log(Math.floor(2.87)); //round down the decimal point
// console.log(Math.round(2.87)); // round up the decimal point
// console.log(Math.round(2.47)); //round down the decimal point

// >>>>>>> to find Min & max values from array
const arr = [6, -2, 9, 4, 21, 45, 23];
// console.log(`Min Value : ${Math.min(...arr)}`);
// console.log(`Max Value : ${Math.max(...arr)}`);

// >>>>>>> Random method return between 0-1
// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
const max = 50;
const min = 10;
console.log(Math.floor(Math.random() * (max - min) + 1) + min);
/* >>>>>>> suppose, 
Math.random() = .14892052
max-min = 40
max.random()*max-min = 5.9568208
max.random()*max-min+1 = 6.9568208
Math.floor(max.random()*max-min+1)+min= 16
*/

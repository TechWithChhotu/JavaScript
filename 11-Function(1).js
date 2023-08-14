// ===========>>>>>>>>>>>Function<<<<<<<<<=============

function helloSay() {
  console.log("Hello");
}

// helloSay(); // Hello
// helloSay(); // Hello
// helloSay(); // Hello

function sumOfTwoNumber(num1, num2) {
  //num1 & num2 are parameters
  return num1 + num2;
}
// console.log(`Sum of 5 and 6 is ${sumOfTwoNumber(5, 6)}`);
//### where sumOfTwoNumber(5,6), 5,6 are arguments

// console.log(sumOfTwoNumber());
//### NaN, becouse does not pass any arguments, then num1 = undefined & num2= undefined assigned, undefined+undefined=NaN or undefined+somthing = NaN

// ===========>>>>>>>>>>>Default Arguments<<<<<<<<<===========
function sumOfTwoNumber2(num1 = 0, num2 = 0) {
  return num1 + num2;
}
// console.log(`Sum of 11 and 21 is ${sumOfTwoNumber2(11, 21)} `);

console.log(sumOfTwoNumber2());
//### if you have not pass any arguments then num1 = 0, num2=0, assigned by default and 0+0 = 0

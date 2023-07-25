// #
// let x = null;
// let num = Number(x);
// console.log(typeof num); //output: number
// console.log(num); //output: 0

// #
// let y = undefined;
// let num2 = Number(y);
// console.log(typeof num2); //output: number
// console.log(num2); //output: NaN

// #
// let str = "123AF";
// let intNum = Number(str);
// console.log(typeof intNum); //output: number
// console.log(intNum); //output: NaN

// #
let str2 = "23f";
let boolVal = Boolean(str2); //output: boolean
console.log(typeof boolVal); //output: boolean
console.log(boolVal); //output:true
boolVal = Boolean("");
console.log(boolVal); //output:false
// 0 => false
// 1 => ture
// emptySting => false
// noneEmptyString or any number => true

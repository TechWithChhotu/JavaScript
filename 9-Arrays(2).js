let myArr = [1, 2, "chhotu", true, false, "BCA"];
// >>>>>>> join(seperator(optional))
// console.log(myArr.join());
// console.log(myArr.join(" "));

/* >>>>>>> splice(startIndex,endIndex), slice copy, startIdex to endIdex-1.*/

// console.log(`myArr.slice(1,4) => ${myArr.slice(1, 4)} `);
// console.log(`myArr => ${myArr} `);

/* >>>>>>> splice(startIndex,endIndex), splice extract, startIndex to endIndex and delete from original array*/

// console.log(`myArr.splice(1,4) => ${myArr.splice(1, 4)} `);
// console.log(`myArr => ${myArr} `);

let newArr = [1, 2, 3, 4, 5, 6, 7];
// console.log(newArr.toLocaleString());
// console.log(typeof newArr.toLocaleString());
newArr.push("@");

// >>>>>>> + and concat, one difference see carefully

// console.log(`to merge two array (+) => ${newArr + myArr} `);

// console.log(`to merge two array (concat) => ${newArr.concat(myArr)} `);

// >>>>>>> Create a new array with the sub-array elements concatenated:
let arrayInsideArray = [1, 2, [3, 4], 5, 6, [7, 8, [9, "intresting"]]];
// console.log(arrayInsideArray.flat(Infinity));

//==========>>>>>>>>>Spread Opearator<<<<<<<<==============concat using spread op
// console.log(`concat newArr,myArr(...) ==> ${[...newArr, ...myArr]}`);

// =========>>>>>>>>>TOCovertInArray<<<<<<<<==========
// 1st string to array
let string = "JavaScript";
// console.log(Array.isArray(string));//false
console.log(`after converting string to array => ${Array.from(string)}`);

// 2nd premitive to array
let num1 = 25;
let num2 = 35;
let num3 = 45;
console.log(
  `after converting premitive to array => ${Array.of(num1, num2, num3)}`
);

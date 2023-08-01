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

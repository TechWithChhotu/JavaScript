// there are two ways to define array in js
// #1st
let myArr = [1, 2, 3, 4, 5];
console.log(myArr);

// #2nd
let array = new Array(1, 2, 3, 4, 5, 6);
console.log(array);

// console.log(array[0]); //Array index start from zero

// console.log(`length of myArr => ${myArr.length}`);

// >>>>>>> for insertion & deletion from the array
myArr.pop(); //delete from end
// console.log(`myArr => ${myArr}`);

myArr.push(9); //insert at end
// console.log(`myArr => ${myArr}`);

myArr.shift(); //delete from start
// console.log(`myArr ${myArr}`);

myArr.unshift(101); // insert at start
// console.log(`myArr ${myArr}`);

// >>>>>>> other Methods
// console.log(`in myArr includes 9 => ${myArr.includes(9)}`);
// console.log(`in myArr includes 20 => ${myArr.includes(20)}`);

// >>>>>>> if element exist in array then return index number other wise return -1
// console.log(`indexOf(5) in myArr ${myArr.indexOf(5)} `);
// console.log(`indexOf(4) in myArr ${myArr.indexOf(4)} `);

/* >>>>>>>
 * Array is collection of elements.
 * JavaScript arrays are resizable and can contain different data types.
 */
let myArray = [1, 2, "chhotu", true, false];
// console.log(myArray);

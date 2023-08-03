// >>>>>>> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let array = [2, 4, 6, 8, 10];
let testCase = (e) => e < 10;
let testCase2 = (e) => e % 2 == 0;

// console.log(array.every(testCase)); //false
// console.log(array.every(testCase2)); //true

// >>>>>>> The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ["apple", "mango", "orange", "papaya", "guava"];
const wordLength = (e) => e.length > 5;
let result;
result = words.filter((e) => e.length < 6);

// console.log(result);
// console.log(words.filter(wordLength));

// >>>>>>> The entries() method returns a new array iterator object that contains the [key/value] pairs for each index in the array.

let iterator1 = words.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// >>>>>>> The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
// >>>>>>> If you need the index of the found element in the array, use findIndex()
// >>>>>>> If you need to find if a value exists in an array, use includes()

//### ["apple", "mango", "orange", "papaya"];

result = words.find((word) => word.length > 5);
// console.log(result);
// console.log(words.findIndex((word) => word.length > 5));
// console.log(words.includes("apple"));

// >>>>>>> findLast and findLastIndex similar to find and findIndex method, but it find from last
result = words.findLast((word) => word.length > 5);
// console.log(result);
// result = words.findLastIndex((word) => word.length > 5);
// console.log(result);
// >>>>>>> The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
words.fill("Fruits");
// console.log(words);

words.fill("apple", 1, 3);
// console.log(words);

// >>>>>>> The forEach() method executes a provided function once for each array element.
// words.forEach((element) => {
//   console.log(element);
// });

// >>>>>>> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let newWords = words.map((e) => e + "(fruit)");
// console.log(newWords);

// >>>>>>> The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

let num = [1, 2, 3, 5, 6, 3];
let newNum = num.flatMap((e) => (e === 3 ? [2, 1] : e));
// console.log(newNum);

// >>>>>>> The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

// console.log(num.some((e) => e % 2 === 0));
// num = [1, 5, 3, 5, 9, 3];
// console.log(num.some((e) => e % 2 === 0));

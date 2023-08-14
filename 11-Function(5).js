//********************** anonymous function or function Expression**********************
const result = function (x, y) {
  return x + y;
};
// console.log(result(5, 6));

//>>>Functions can also be defined with a built-in JavaScript function constructor called Function().
//>>> This is useful when you want to create functions dynamically at runtime:
const newFunction = new Function("a", "b", "return a*b");
console.log(newFunction(8, 9));

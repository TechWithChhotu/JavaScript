// Basic Syntax ` () => {} `
const sumOfTwoNumber = (x, y) => {
  return x + y;
};
console.log(sumOfTwoNumber(8, 4));

// if single line statement returnable then user implicit return array function, that`s no need to wrap {curlibraces} & write return keyword, but it`s optional to wrap using (parentheses) this is very useful for returning object or/and react development
const sumOfTwoNumberI = (x, y) => x + y;
// console.log(sumOfTwoNumberI(8, 12));

// return obj using implicit return
// const obj = ()=>{} this is wrong
const obj = () => ({ coder: "Chhotu" });
// console.log(obj());

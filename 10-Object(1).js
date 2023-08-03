// there are two way to declear object in js.1st object literals and 2nd object constructor
//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
/// in Obj key triet as string.

// =========>>>>>>>>>>>>Object Literals<<<<<<<<<<<============
let Obj = { name: "chhotu", city: "Shiekhpura", email: "chhotu@mic.com" }; //object literals

// console.log(Obj); // get entire obj
// console.log(Obj.city); // to get specific key value using dot(.) operator
// console.log(Obj["name"]); //this syntax is also valid

const student = {
  name: "chhotu",
  age: 20,
  course: "BCA",
  marks: [450, 398, 435],
  sumOfMarks: () => {
    let totalSum = 0;
    student.marks.forEach((element) => {
      totalSum += element;
    });
    return totalSum;
  },
};
// the js object can also contain array, object, function.

// console.log(student);
console.log("sum of marks ==> ", student.sumOfMarks); //return undefined, becouse sumOfMarks is not called from this place
console.log("sum of marks ==> ", student.sumOfMarks());

//=========>>>>>>Update the value of object key<<<<<<===========
student.age = 15;
student.marks = [50, 80, 40];

// console.log(student);

//============>>>>>>>>>TO delete the keyValue pairs from object<<<<<<<===========
delete student.age; /// delete the key from object
delete student.sumOfMarks;
// console.log(student);

//============>>>>>>>>>TO Add the keyValue pairs in the object<<<<<<<===========
student.city = "Bihar"; // if any key is not exist in object then add automatically in the object

// ==========>>>>>>>How to freeze object<<<<<<<===========
// >>>>>>> The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

let newObject = { name: "DivyaRaj", age: 15, email: "divya@gpt.com" };
// console.log("Before freeze ====>", newObject);

Object.freeze(newObject);
delete newObject.email;
newObject.name = "RaviRaj";
newObject.city = "Sheikhpura";

// console.log("After freeze ====>", newObject);

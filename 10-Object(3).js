// ===========>>>>>>>>>>>Destructure<<<<<<<<<=============

const course = {
  courseName: "FSWD",
  courseInstructor: "Ckumar",
};

//----------------------Destructure----------------------
const { courseName } = course;
// console.log(courseName);
//### you can also change the name of the destructure like
const { courseInstructor: instructor } = course;
// ### you can never you couseInstructor, use instructor
// console.log(instructor);

//**********************you can also Destructure all the elements at once**********************
const { courseName: Name, courseInstructor: mentor } = course;
console.log(`Course is ${Name} and Instructor is ${mentor}`);

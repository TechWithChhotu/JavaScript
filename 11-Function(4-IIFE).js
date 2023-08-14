// >>>>> IIFE is useful for like hiding(hatane) global pollution &/or connection to DB

// >>>>>  basic Syntax (functionDefination)(functionCalling); semicolon is compulsory

(function coder() {
  console.log("Hello Coder");
})();

// (function () {
//   console.log("Hello Coder2");
// })();

// (() => {
//   console.log("Hello Coder3");
// })();

// >>>>>>> Pass Argument
((name) => console.log(`Good Morning, ${name}`))("chhotu");

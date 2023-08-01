// ### to convert sting into upper and lower case using build in method => toUpperCase and toLowerCase

// console.log("\nUpperCase (Chhotu)=> ", "Chhotu".toUpperCase());
// console.log("\nLowerCase (KUMAR)=> ", "KUMAR".toLowerCase());
// console.log("CharAt(2) (Chhotu)=> ", "Chhotu".charAt(2));
// console.log("at(2) (Chhotu)=> ", "Chhotu".at(2));
// console.log("indexOf('o') (Chhotu)=> ", "Chhotu".indexOf("o"));

let str1 = "chhotu-kumar";
//# substring(startIndex,endIndex), endIndex not be considard.
let newString = str1.substring(2, 5);
// console.log(newString);

//# slice(startIndex,endIndex), endIndex not be considard. index num. also -ve
anotherString = str1.slice(2, 5);
// console.log(anotherString);

let str2 = "      chhotu            kumar            jaim      ";
let trimedString = str2.trim(); //remove white spaces from both sides of string and return new string, also use trimStart, trimEnd.
// console.log(str2);
// console.log(trimedString);

let url = "https://techWithChhotu.com/chhotu%20portfolio";
let newUrl = url.replace("%20", "-");
// console.log(newUrl);

let searchInUrl = url.includes("kumar");
// console.log(searchInUrl);
searchInUrl = url.includes("portfolio");
// console.log(searchInUrl);

let str3 = "chhotu-kumar-BCA-RDC-Munger";
// split(seprater,limit(optional))
// console.log(`Split by hyphen: ${str3.split("-")}`);
// console.log(`Split by hyphen limit->3: ${str3.split("-", 3)}`);

// #### Return HTML Element Method
let str4 = "Hello Developer";
// console.log(str4.big()); // Return HTML big tag
// console.log(str4.small()); // Return HTML small tag
// console.log(str4.fontsize(10)); // Return HTML font tag with size = 10
// console.log(str4.fontcolor("red")); // Return HTML font tag with color style = red
// console.log(str4.bold()); // return HTML b tag
// console.log(str4.blink()); // return HTML blink tag
// console.log(str.fixed());// return HTML tt tag

// ##
// console.log(str.link("coder"));// return HTML a tag, to set href and a tag innerText

let str = "Hello Coder";

// console.log(str.charCodeAt(9)); // it returns the ASCII value
// console.log(str.codePointAt(9)); // it returns the ASCII value

// console.log(str + " and developer"); // for concationation
// console.log(str.concat(" and developer")); // for concationation

// console.log(str.endsWith("Coder"));//search end string exist or
// console.log(str.endsWith("coder"));

let a = "hello coder";
// console.log(str.localeCompare(a)); // retrun 1 if string match without considering case. useful for email coparision

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
// console.log(found);

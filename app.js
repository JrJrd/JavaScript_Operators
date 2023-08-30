console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;
let sum = a + b;
let multiply = a * b;
let divid = a / b;
let remainder = a % b;
console.log(sum);
console.log(multiply);
console.log(divid);
console.log(remainder);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

let value1 = num + str;
let value2 = num + str2;
let value3 = num + isPresent;
let value4 = firstName + num;
let value5 = isPresent + str;
let value6 = firstName + lastName;

console.log(value6 + " " + value1 + " " + value2 + " " + value3 + " " + value4 + " " + value5);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

console.log(val == str3); //true
console.log(!isPresent2); //true
console.log(!isPresent2 || isPresent2); //true
console.log(0 == false); //true
console.log(0 === false); //false
console.log(0 != false); //false
console.log(0 !== false); //true


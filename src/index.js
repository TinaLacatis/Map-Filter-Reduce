import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//---------------------------
// function double(x) {
//   return x * 2;
// }

//const newNumbers = numbers.map((x) => x * 2);

//---------------------------
// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);

// numbers.forEach((x) => newNumbers.push(x * 2));

//---------------------------
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// const newNumbers = numbers.map((x) => x * 2);

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

//---------------------------
// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// const newNumbers = numbers.filter((x) => x > 10);

//---------------------------
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });

// numbers.forEach((x) => {
//   if (x < 10) {
//     newNumbers.push(x);
//   }
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });

// numbers.forEach((x) => (newNumber += x));

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// var newNumber = numbers.reduce((x, y) => x + y);

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// const newNumber = numbers.find((x) => x > 10);

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// const newNumber = numbers.findIndex((x) => x > 10);

// console.log(newNumber);

// import emojipedia from "./emojipedia";

// const description = emojipedia.map(function (text) {
//   return text.meaning.substring(0, 100);
// });
// console.log(description);

// function square(x) {
//   return x * x;
// }
// const newNumbers = numbers.map(square);
// console.log(newNumbers);

// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });
// console.log(newNumbers);

// const newNumbers = numbers.map((x) => {
//   return x * x;
// });
// console.log(newNumbers);

// const newNumbers = numbers.map((x) => x * x);
// console.log(newNumbers);

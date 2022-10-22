var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

var newNumbers = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});

console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

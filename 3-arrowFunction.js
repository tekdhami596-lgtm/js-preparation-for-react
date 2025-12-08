// const gfg = ( x, y, z = 30 ) => {
//     console.log( x+y+ z);
// }
// gfg( 10, 20 );

// function greet() {
//   console.log("Hello World");
// }

const greet = () => {
  console.log("Hello World");
};
greet();

// Create an arrow function that takes a number and returns its square
const square = (x) => x * x;
console.log(square(5));

const checkEven = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
};
console.log(checkEven(10));
console.log(checkEven(19));

// Convert this to an arrow function
function add(a, b) {
  return a + b;
}
const adds = (a, b) => a + b;
console.log(adds(5, 6));

// Convert this function to use implicit return
function multiply(x, y) {
  return x * y;
}
const mul = (x, y) => {
  return x * y;
};
console.log(mul(5, 6));

// Use arrow function with map to create an array of squares
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => {
  return num * num;
});
console.log(squares);

// Use arrow function with filter to get numbers greater than 20
const number1 = [10, 15, 20, 25, 30];
const filterNum = number1.filter((num) => {
  return num > 20;
});
console.log(filterNum);

// Convert greet method to an arrow function
// Observe what happens with 'this'
/* const person = {
  name: "Ram",
  greet: function() {
    console.log("Hello " + this.name);
  }
}; */

const person = {
  name: "Ram",
  greet: ()=> {
    console.log("Hello " + this.name);
  },
};
person.greet();

 /* Convert to arrow function

setTimeout(function() {
  console.log("Time's up!");
}, 1000);
 */
setTimeout(()=> {
  console.log("Time's up!");
}, 1000)
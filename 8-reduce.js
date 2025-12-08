// Find the sum of numbers, Use reduce() to get the total sum
const nums = [5, 10, 15, 20];
const sum = nums.reduce((total, x) => total + x, 0);
console.log(sum);

// Find the product of all numbers
const numbers = [2, 3, 4];
const product = numbers.reduce((total, x) => total * x, 1);
console.log(product);

// Find the maximum number
const marks = [45, 77, 12, 89, 34];
const maximum = Math.max(...marks);
console.log(maximum);

// Find the minimum number
const prices = [120, 99, 450, 60, 150];
const minPrice = Math.min(...prices);
console.log(minPrice);

// Count total elements using reduce
const fruits = ["apple", "banana", "mango", "orange"];
const totalElement = fruits.reduce((total, x) => total + 1, 0);
console.log(totalElement);

// Find total price using reduce
const items = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 500 },
];

const totalPrice = items.reduce((total, item) => (total += item.price), 0);
console.log(`Total price is ${totalPrice}`);

// Total marks of students
const students = [
  { name: "Ram", marks: 80 },
  { name: "Sita", marks: 90 },
  { name: "Hari", marks: 70 },
];
console.log(
  `total marks is ${students.reduce(
    (total, student) => (total += student.marks),
    0
  )}`
);


// Count even numbers using reduce
const nums2 = [10, 15, 20, 25, 30, 35];
const evenNumber = nums2.reduce((total,num)=>{
  if(num%2===0){
    total+=1
  }
  return total;
},0)
console.log(evenNumber)


// Convert array into single string
const words = ["I", "Love", "JavaScript"];
const string = words.reduce((total, str)=>`${total} ${str}`,"")
console.log(string);
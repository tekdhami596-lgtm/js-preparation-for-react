const numbers = [5, 12, 8, 20, 7, 15];
// Use filter to get numbers greater than 10

const filteredNum = numbers.filter((num) => num > 10);
console.log(filteredNum);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use filter to get all even numbers

const evenNumbers = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

const fruits = ["apple", "banana", "kiwi", "watermelon", "grape"];
// Use filter to get strings whose length is greater than 5

const fruitsLength = fruits.filter((fruit) => {
  return fruit.length > 5;
});
console.log(fruitsLength);

const students = [
  { name: "Ram", marks: 85 },
  { name: "Sita", marks: 65 },
  { name: "Hari", marks: 90 },
  { name: "Gita", marks: 55 },
];
// Use filter to get students who scored more than 70

const filterStudents = students.filter((student) => {
  return student.marks > 70;
});
console.log(filterStudents);

const people = [
  { name: "John", age: 16 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Jane", age: 15 },
];
// Use filter to get only adults
const filteredPeople = people.filter((person) => {
  return person.age >= 18;
});
console.log(filteredPeople)



const words = ["cat", "dog", "banana", "apple", "mango"];
// Use filter to get strings containing 'a'

const filteredWords = words.filter((word)=>{
  return word.includes('a')
})
console.log(filteredWords)


const products = [
  { name: "Laptop", price: 800, brand: "Dell" },
  { name: "Phone", price: 500, brand: "Samsung" },
  { name: "Tablet", price: 300, brand: "Apple" },
  { name: "Monitor", price: 200, brand: "Dell" },
  { name: "Mobile", price: 900, brand: "Dell"}
];
// Filter products which are from "Dell" and price > 500

const filteredProducts = products.filter((product)=>{
  return product.price>500 && product.brand==="Dell"
})

console.log(filteredProducts)
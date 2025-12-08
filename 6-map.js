// Task: Create a new array with all values multiplied by 2.
const nums = [2, 4, 6, 8];
const updatedNums = nums.map((num) => {
  return num * 2;
});
console.log(updatedNums);
console.log(nums);

// Task: Convert each name to uppercase.
const names = ["ram", "sita", "hari"];
const uppercase = names.map((name) => {
  return name.toUpperCase();
});
console.log(names);
console.log(uppercase);

// Task: Add 10 bonus marks to each value.
const marks = [30, 40, 50];
const updatedMarks = marks.map((mark) => {
  return mark + 10;
});
console.log(marks);
console.log(updatedMarks);

// Task: Add 13% VAT to each price.
const prices = [100, 200, 300];
const updatedPrices = prices.map((price) => {
  return price + 0.13 * price;
});
console.log("originaalPrice :", prices);
console.log("PricewithVAT", updatedPrices);

// Create User Objects from Names

const nepaliNames = ["Ram", "Sita", "Hari"];
const users = nepaliNames.map((name, index) => {
  return {
    id: `${index + 1}`,
    name: name,
  };
});
console.log(users);

// Convert Numbers into Objects
const numbers = [1, 2, 3, 4];
const objNumbers = numbers.map((num) => {
  return {
    value: num,
    square: num * num,
  };
});
console.log(numbers);
console.log(objNumbers);

// Generate Email & Password
const students = ["Aayush", "Bibek", "Suman"];
const db_students = students.map((firstName, index) => {
  return {
    name: firstName,
    email: `${firstName.toLowerCase()}@gmail.com`,
    password: `${firstName.toLowerCase()}${index}`,
  };
});

console.log(db_students);

// Add Grade Property

const users3 = [
  { name: "Ram", marks: 85 },
  { name: "Sita", marks: 92 },
  { name: "Hari", marks: 60 },
];

const userGrade = users3.map((user) => {
  function calculateGrade(mark) {
    {
      if (mark >= 90 && mark <= 100) {
        return "A";
      } else if (mark < 90 && mark >= 80) {
        return "B";
      } else if (mark < 80 && mark >= 60) {
        return "C";
      } else {
        return "fail";
      }
    }
  }

  return {
    ...user,
    grade: calculateGrade(user.marks),
  };
});

console.log(userGrade);

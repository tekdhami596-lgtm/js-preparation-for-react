// let original ={
//   name : "ram",
//   address : {add: "kathmadu"}
// }

// let copy = {...original}
// copy.name="hari";
// copy.address = "pok"
// console.log(copy)
// console.log(original);

let original = [1,2,3]
let copy = [...original]

copy[0]=5
console.log(original)
console.log(copy)
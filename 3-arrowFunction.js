// const gfg = ( x, y, z = 30 ) => {
//     console.log( x+y+ z);
// }
// gfg( 10, 20 );

// function greet() {
//   console.log("Hello World");
// }

const greet =()=>{
  console.log("Hello World");
}
greet();


const square = x => x*x;
console.log(square(5));

const sum =(a,b)=> a+b;
console.log(sum(10,20));


const checkEven = (num) =>{
  if(num%2===0){
    return "Even"
  }
  else{
    return "odd";
  }
}
console.log(checkEven(10));
console.log(checkEven(19));



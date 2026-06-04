console.log("Hello JS Day 03");

// Operators :

console.log(10 + 5);

// logical opt  : &&   ||    !

let a = 20;
let b = 10;
let c = 5;

console.log(a < b);
console.log(!(a < b));

console.log(a > b && c > b); // false
// && opt needs all condition to be true, if any false, whole stmt is false

console.log(a > b || c > b); // true
// && opt needs all condition to be false, if any true, whole stmt is true

// == , ===

let x = "5";
let y = 5;

console.log("x == y --> " + (x == y)); // true
// == checks values with not respect to data type

console.log("x === y --> " + (x === y)); // false
// === checks values with respect to data type

// ternary

//   variable = condition ? true : false ;

let marks = 62;

let grade = marks > 90 ? "A" : marks > 80 ? "B" : marks > 70 ? "C" : "D";

console.log(grade);

// spread :

let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = [4, 5, 6, 7];
console.log(arr2);

let merged = [arr1, arr2];
console.log(merged);

// spread opt with array use to split values separately

console.log("spread --> ", ...arr1)

let spreadMerged = [...arr1 , ...arr2]

console.log(spreadMerged)

let person = {id : 1234 , name : 'Raj Patil' , age : 23}
console.log(person)

person = {...person ,  age : 24}

console.log(person)

person = {...person ,  city : "Pune"}

console.log(person)
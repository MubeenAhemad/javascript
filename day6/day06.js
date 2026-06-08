console.log("Hello JS Day 06");

let num = 300;

if (num > 50) {
  console.log("num is greater than 50");
}

let age = "tka";

if (age > 0 && age < 100) {
  if (age >= 18) {
    console.log("Eligible for voting");
  } else {
    console.log("Underage.. not eligible for voting");
  }
} else {
  if (age == 0) {
    console.log("Zero is not a valid age");
  } else if (age <= 0) {
    console.log("Invalid age.. age is negative");
  } else {
    console.log("Invalid age.. age is in invalid numbers");
  }
}

function checkMobile() {
  let mob = document.getElementById("mob").value;
  let msg = document.getElementById("msg");

  let mobileRegex = /^[6-9]\d{9}$/.test(mob);

  if (mobileRegex) {
    msg.innerHTML = "valid mob";
  } else {
    msg.innerHTML =
      "Mob should must be 10 digits & starts from 6-9 , invalid mob";
  }
}

let day = 1; //  follows ===  , exact matching values

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("not a valid day");
    break;
}

let arr = ["mango", "orange", "banana", 5, "grapes", "kiwi"];

let fts = document.getElementById("fruits");

console.log("*******normal for loop*******");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("*******for-in-loop*******");

for (let i in arr) {
  if (i == 3) {
    continue;
  } else {
    console.log(arr[i]);
  }
}
console.log("*******for-of-loop*******");

for (let v of arr) {
  if (v == 5 || v == "grapes") {
    continue;
  } else {
    fts.innerHTML += v + "<br>";
    console.log(v);
  }
}

let digit = 32;

while (digit < 40) {

    digit+=6 ; 
}

console.log(digit)

let x = 5;

if (x++ > 5) {
    console.log("A");
} else {
    console.log("B");
}

console.log(x);
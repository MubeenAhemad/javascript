console.log("hello 07");

let arr = [1, 2, 3, 4];

//  let num = for (let v of arr) { console.log(v) }

let nums = arr.map((n) => n + 1);

console.log(nums);

let arr2 = [4, 5, 6, 7, 8, 9, 10];

let sum = [];
for (let v of arr2) {
  sum.push(v + 2);
}
console.log(sum);

console.log("-----------------");

let sums = arr2.map((v) => v + 2);
console.log(sums);

console.log("---------------------");

let gt = [];
for (let v of arr2) {
  if (v > 6) {
    gt.push(v);
  }
}
console.log(gt);

console.log("----- By filter -----------");

let gts = arr2.filter((v) => v > 6);
console.log(gts);

console.log("---------------------------");

let sq = arr.map((v) => v * v);
console.log(sq);

const employees = [
  {
    id: 101,
    name: "Tejas",
    role: "dev",
    salary: 45000,
  },
  {
    id: 102,
    name: "Mansi",
    role: "react",
    salary: 55000,
  },
  {
    id: 103,
    name: "Revati",
    role: "python",
    salary: 40000,
  },
  {
    id: 104,
    name: "Sujal",
    role: "python",
    salary: 60000,
  },
  {
    id: 105,
    name: "Lakhan",
    role: "dev",
    salary: 70000,
  },
];


let devs = employees.filter((e)=> e.role === "dev")

console.log(devs)

let arr3 = [2,3,4,5]

let rd =  arr3.reduce((sum , num  )=> sum + num , 0 )
console.log(rd)


let sm = 0 ;
for(let v of arr3){
   sm += v ; 
}
console.log(sm)

// 1. inc marks
let marks = [45, 60, 78, 90, 55];

let newMarks = marks.map((m)=> m+5)
console.log(newMarks)

let prices = [1000, 2000, 1500, 500];

let newPrices = prices.map((p) => p - (p*0.10))

console.log(newPrices)

let num = 421351122 ; 
let count = 0 ;
while (num > 0 ) {
     count++ ; 
      num = Math.floor(num/10)
}

console.log("Digits in num : "+count)
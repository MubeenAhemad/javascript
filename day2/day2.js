// Datatypes : typeof

let a = 123123;

let b = 12312.123123;

let c = 13123.123123123312;

let d = '@'

let e = 'javascript'

let f = false

let g = null

let h = [1,2,3,4,5]

let i = {'id' : 101 , 'name' : 'tejas'}

let j = 

console.log('type of a = 123123 is',typeof(a))
console.log('type of b = 12312.123123 is',typeof(b))
console.log('type of c = 13123.123123123312 is',typeof(c))
console.log('type of d = "@" is',typeof(d))
console.log('type of e = "javascript" is',typeof(e))
console.log('type of f = false is',typeof(f))
console.log('type of g = null is',typeof(g))
console.log('type of h = [1,2,3,4,5] is',typeof(h))
console.log("type of i = {'id' : 101 , 'name' : 'tejas'} is",typeof(i))
console.log('type of j =  is',typeof(j))

// function - it is reusable block of code

// 1. normal function 

function greet(){
    console.log('Hi ! I am normal function')
}
greet()

function sum(a,b){
    console.log(a+b)
}
sum(5,3)
sum('raj',3)
sum(5,'3')
sum('raj','verma')

function diff(a,b){
    console.log(a-b)
}
diff(5,3)
diff('raj',3)
diff(5,'3')
diff('raj','verma')

function mul(a,b){
    console.log(a*b)
}
mul(5,3)
mul('raj',3)
mul(5,'3')
mul('5','verma')

function greetings(name){
    console.log('Good Evening '+name)
}
greetings('tejas')

// 2. Arrow function .     lambda function = >
 
// division = lambda x : x * x   in python

// in js

let multi = (x) => x * x

console.log(multi(10))

let div = (x,y) => x / y

console.log(div(10,2))
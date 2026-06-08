// console.log("Hello Day 08")

// Dialogue Boxes : Pop-up Window


// Dialogue box

// let a = alert("Hello I am just a simple message")

// console.log(a)


// confirm -> returns boolean value

// let cfm = confirm("Are you sure to delete ?")

// console.log(cfm)


// prompt -> accepts input]
// if click only ok and no input returns empty
// if click cancel returns none

// pmt = prompt("What is your name")
// console.log(pmt)


// setTimeout : Execute only once after given time
// setInterval : Executes again and agein after the given time

/*

console.log("start")

setTimeout(()=>{
    console.log("process")
},2000)

console.log("end")

const greet = () => {
    console.log("Hello All")
}

setTimeout(greet,3000)

*/


/*
setInterval(() => {
    count++;
    console.log("I am interval = ",count)
},1000);

*/


/*
let count = 0;

let id = setInterval( () => {console.log(1+1)},1000)
*/

/*
let count=0 
const greet = () => {
    console.log("Hello All")}

let id = setInterval(() => {
    greet();
    if (count==5){
        clearInterval(id);
    }
},1000)
*/

/*
let color = ["red","yellow","blue","brown","white","black","orange","green","violet","maroon","purple"];
let count = 0;
function change(){
    count++;
    let body = document.querySelector("body");
    body.bgColor = color[count];
}
setInterval(change,200)
*/


let color = ["red", "yellow", "blue", "brown", "white", "black", "orange", "green", "violet", "maroon", "purple"];
let count = 0;

function change() {
    document.body.style.backgroundColor = color[count];

    count++;
    if (count >= color.length) {
        count = 0; 
    }
}

setInterval(change, 200);
console.log("Hello JS 04");

function greet() {
  console.log("Greet function invoked by html");
}

// greet()  // manual calling from JS



function checkLogin() {
  console.log("checking login details...");

  let un = document.getElementById("uname").value;
  let pwd = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  console.log(un);
  console.log(pwd);
  if (un === "tejas" && pwd === "tka123") {
    msg.innerHTML = "Login Success";
    msg.style.color = "blue";
  } else {
    msg.innerHTML = "Invalid Credentials";
    msg.style.color = "red";
  }
}

const change = () => {
  let h1 = document.getElementById("one");

  if (h1.innerHTML == "Welcome to Day 04") {
    h1.innerHTML = "Change By DOM";
    h1.style.backgroundColor = "violet";

  } else if (h1.innerHTML == "Change By DOM") {
    h1.innerHTML = "DOM Manipulation";
    h1.style.backgroundColor = "red";

  }
  else {
    h1.innerHTML = "Welcome to Day 04";
    h1.style.backgroundColor = "yellow";
  }
};
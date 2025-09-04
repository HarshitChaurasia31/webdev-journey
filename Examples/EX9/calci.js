const prompt = require("prompt-sync")();
function add(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a / b;
}
function divide(a, b) {
    return a ** b;
}
let c = prompt("Enter first number");
c = parseInt(c);
let d = prompt("Enter second number");
d = parseInt(d);
console.log("Press 1=Addition 2=Multiply 3=subtraction 4=divide");
let choice = prompt("Enter your choice");
choice = parseInt(choice);
let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
if (random == 1) {
    if (choice==1){
        console.log("The addition of Two numbers is:", c+d)
    }
    else if(choice==2){
        console.log("The multiplication of two numbers is:", c*d)
    }
    else if(choice==3){
        console.log("The subtraction of two numbers is:", c-d)
    }
    else{
         console.log("The division of two numbers is:", c/d)
    }
}
else {
    if (choice == 1) {
        console.log("The addition of Two numbers is:", add(c, d))
    }
    else if (choice == 2) {
        console.log("The multiplication of two numbers is:", multiply(c, d))
    }
    else if (choice == 3) {
        console.log("The subtraction of two numbers is:", subtract(c, d))
    }
    else {
        console.log("The divide of two numbers is:", divide(c, d))
    }
}
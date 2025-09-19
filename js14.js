let  a = prompt("Enter first number")

let b= prompt("Enter second number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry wrong input type")
}
let sum=parseInt(a)+parseInt(b);
let x=1;
try {
    console.log("The sum is",sum*x)
    return true
} catch (error) {
    console.log("Koi galti kari hai")
    return false
}
finally{
    console.log("Files are done db connection is closing")
}
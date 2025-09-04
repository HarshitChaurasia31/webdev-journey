function nice(name) {
    console.log("Hey " + name + " you are nice")
    console.log("Hey "+ name + " you are amazing!")
    console.log("Hey " +name +" you are handsome!")
    console.log("Hey " +name +" you are awesome!")
}
function sum(a,b,c=3) {
    // console.log(a+b)
    return a+b+c;
}
nice("Harshit");
console.log("The sum of the numbers is:",sum(8,9,1))

const func =(x)=>{
    console.log("I am an arrow function",x)
}
func(1);
func(34);
func(66);

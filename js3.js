console.log("Hello I am a conditional statement")
let age=15;
if(age>=18){
    console.log("You can drive");
}
else{
    let remaning=18-age;
    console.log("Years remaning to drive",remaning);
}
// let sq=2;
// console.log(2**2);
// console.log(sq++);
// console.log(sq+=1);
// if("3"===3 || "2"==2){
//     console.log("True");
// }
// else {
//     console.log("False");
// }
let b=9;
if(b%2==0){
    console.log("Divisible by 2");
}
else if(b%3==0){
    console.log("Divisible by 3")
}
else{
    console.log("Neither divisible by 2 nor 3");
}
let c=6;
let d=8;
let e= c>d ?(c-d):(d-c);
console.log(e);
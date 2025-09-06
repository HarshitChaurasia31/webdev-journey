const prompt = require("prompt-sync")();

let num=prompt("Enter a number to get factorial:")
num=parseInt(num)
let facarr=[]
for (let i = num; i >=1; i--) {
    const element = i;
    facarr.push(i)
}
const red =(a,b)=>{
    return a*b;
}
console.log(facarr.reduce(red))
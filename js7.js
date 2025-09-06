let arr=[1,2,3,5,8];
// console.log(arr, typeof arr)
// console.log(arr.length)
// console.log(arr[4])
// console.log(arr.toString())
// console.log(arr.join("and"))
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.push(7))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift(8))
// console.log(arr)
// console.log(delete arr[5])
// console.log(arr)
// let a1=["a","b","c","d"];
// let a2=["e","f","g"];
// let a3=["h","i","j","k"];
// console.log(a1.concat(a2,a3))
// console.log(a1.concat(a3,a2))
// let a4=[1,3,8,2,6,9];
// let a5=["f","q","a","s"];
// console.log(a4.sort())
// console.log(a5.sort())
// console.log(a4.splice(0,3))
// console.log(a4)
// console.log(a4.splice(0,2,45,46))
// console.log(a4)
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
arr.forEach((value,index) => {
    console.log(index,value)
});
let obj ={
    a:1,
    b:3,
    c:5
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}
for (const it of arr) {
    console.log(it)
}
// let sqarr=[]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sqarr.push(element**3)
// }
// console.log(sqarr)
let sqarr=arr.map((e)=>{
    return e**2;
})
console.log(sqarr)
const greaterthanten =(e)=>{
    if(e>10){
        return true;
    }
    return false;
}
console.log(sqarr.filter(greaterthanten))
let arr1=[1,3,4,7,8]
const red =(a,b)=>{
    return a+b
}
console.log(arr1.reduce(red))
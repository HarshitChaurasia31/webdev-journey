// CALLBACK FUCTION

// console.log("Hacker this side")
// console.log("Hecker is your truth")
// setTimeout(() => {
//     console.log("Both are wrong")
// }, 2000);
// console.log("The end")
// const callback = (arg) => {
//   console.log(arg)
// //   alert (arg);
// }

// const loadsrcipt =(src,callback) => {
//   let sc =document.createElement("script");
//   sc.src=src;
//   sc.onload = callback("harshit");
//     document.head.append(sc)
// }

// loadsrcipt("https://www.youtube.com/",callback)

// PROMISE 

console.log("This is Promises")

let prom1=new Promise((resolve,reject)=>{
    let b=Math.random();
    if (b>0.5){
        reject("No one is found on server")
    }
    else{
        setTimeout(() => {
            console.log("Yes i am done")
            resolve("Harry")
        }, 2000);
    }
})

let prom2=new Promise((resolve,reject)=>{
    let b=Math.random();
    if (b>0.5){
        reject("No one is found on server again")
    }
    else{
        setTimeout(() => {
            console.log("Yes i am done again")
            resolve("Harry coder")
        }, 2000);
    }
})

// prom1.then((a) => {
//   console.log(a)
// }
// ).catch((err) => {
//   console.log(err)
// }
// )
let p2=Promise.allSettled([prom1,prom2])
p2.then((a) => {
  console.log(a)
}
).catch(e =>{
    console.log(e)
})
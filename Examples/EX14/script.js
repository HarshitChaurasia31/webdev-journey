function blinker(c){
    return new Promise ((resolve) =>{
        let a = document.querySelectorAll(".blinker")[c];
        let b = Math.floor(Math.random() * (7)) + 1;
        console.log(b)
        a.style.animationIterationCount = b;

        a.addEventListener("animationend",function handler(){
            a.removeEventListener("animationend",handler);
            resolve();
        })
    })

}
function blinker1(){
    return new Promise ((resolve) =>{
        let a = document.querySelector(".blinker1");
        let b = Math.floor(Math.random() * (7)) + 1;
        console.log(b)
        a.style.animationIterationCount = b;

        a.addEventListener("animationend",function handler(){
            a.removeEventListener("animationend",handler);
            resolve();
        })
    })

}
function blinker2(){
    return new Promise ((resolve) =>{
        let a = document.querySelector(".blinker2");
        let b = Math.floor(Math.random() * (7)) + 1;
        console.log(b)
        a.style.animationIterationCount = b;

        a.addEventListener("animationend",function handler(){
            a.removeEventListener("animationend",handler);
            resolve();
        })
    })

}
async function main(){
    let a=0;
    await blinker(a);
    document.querySelector(".blinker").insertAdjacentHTML("afterend","<li class=blinker1>.</li>")
    await blinker1();
    document.querySelector(".blinker1").insertAdjacentHTML("afterend","<li class=blinker2>.</li>")
    await blinker2();
    document.querySelector(".text").insertAdjacentText("afterend" , "Reading your files")
    a=a+1;
    await blinker(a);
    document.querySelector(".blinker").insertAdjacentHTML("afterend","<li class=blinker1>.</li>")
}
main()
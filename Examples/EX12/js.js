console.log("Hello world")
document.querySelectorAll(".box").forEach(a => {
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    a.style.backgroundColor="rgb("+x+","+y+","+z+")";  
});
document.querySelectorAll(".box").forEach(e =>{
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    e.style.color="rgb("+x+","+y+","+z+")";
});

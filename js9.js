console.log("Hello")
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor= "red"
let boxes=document.getElementById("red")
boxes.style.backgroundColor="red"
// document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box").forEach (e =>{
    e.style.backgroundColor="green"
})

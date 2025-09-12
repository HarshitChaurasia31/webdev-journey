let btn=document.getElementById("btn")
btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Click kardiya</b> Gaye ab toh"
    // alert("I was clicked") 
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key , e.keyCode)
})
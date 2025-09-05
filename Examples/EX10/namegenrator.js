const prompt=require("prompt-sync")();
function random(min,max){
    let num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
}
function adjective(){
    let ad=random(1,3);
    if(ad==1){
        return "Crazy";
    }
    else if(ad==2){
        return "Amazing";
    }
    else{
        return "Fire";
    }
}
function shop_name(){
    let sn=random(1,3);
    if(sn==1){
        return "Engine"
    }
    else if(sn==2){
        return "Foods"
    }
    else{
        return "Garments"
    }
}
function last_word(){
    let ln=random(1,3);
    if(ln==1){
        return "Bros";
    }
    else if(ln==2){
        return "Limited";
    }
    else{
        return "Hub";
    }
}
console.log("<----Welcome To Name Generator---->");
let cho=prompt("Press Y to continue");
if(cho=="Y" || cho=="y"){
    console.log(adjective(),shop_name(),last_word()); 
}

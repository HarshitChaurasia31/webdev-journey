// let obj ={
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal ={
//     eats:true
// };
// let rabbit ={
//     jumps: true
// };
// rabbit._proto_ =animal;

class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha rha hu")
    }
    jumps(){
        console.log("Kood rha hu")
    }
}
class lion extends Animal{
    constructor(name){
        super()
        this.name=name
        console.log("Object is created and he is a lion...")
    }
    eats(){
        console.log("Kha rha hu roar karke")
    }
}

let a= new Animal("Bunny");
console.log(a);

let l=new lion("Sherr");
console.log(l)
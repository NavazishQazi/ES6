// class person{
//     constructor(n,a){
//         this.name = n;
//         this.age = a;
//     }
//     sayHi(){
//         console.log("Hi....");
//     }

//     static sproperty = "something";

//     static hello(){
//         console.log("hello...");
//     }
// }

// let person1 = new person("Navazish",23);

// person1.sayHi(); 
// console.log(person1);
// person.hello();


// ------------------------------------------------------------------

class emp {
    constructor(n){
        this.name = n;
    }
}

class manager extends emp{
    constructor(p,d){
        super(p);
        this.department =d;  
    }
}
let mng1 = new manager("vishwajeet","web development");
console.log(mng1);
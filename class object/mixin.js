// Mixin

let usefullMethod ={
    sayhi(){
        console.log("Hi...");
    },
    sayBye(){
        console.log("Bye...");
    }
};

let usefullMethod2 ={
    sayhi(){
        console.log("Hi...");
    },

    sayBye(){
        console.log("bye...")
    }
};

class user {
    constructor(){
        this.name="Navazish"
    }
}
class admin extends user{

}
Object.assign(admin.prototype,usefullMethod);
Object.assign(admin.prototype,usefullMethod);

let admin1 = new admin();
console.log(admin1);
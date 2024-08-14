// let person1 ={
//     firstName: 'Navazish',
//     lastName: 'Qazi',
//     age:28,
    

//     fullName: function(){
//         console.log(this.firstName+" "+this.lastName);

//     }
// };
// person1.fullName();
// -------------------------------------------------------------------
// let person1 = new Object();

// person1.name ="Navazish Qazi";

// person1.sayHi = function(){
//     alert("Hiiii");
// }
// console.logI(person1);
// person1.sayHi();

// --------------------------------------------------------------------------------

 function Person (first,last,a){
    this.firstName = first;
    this.lastname = last;
    this.age = a;

    this.chngAge = function(newAge){
        this.age = newAge;
    }
 }
 let person1 = new Person("Navazish","Qazi",23);
 person1.chngAge(22);
 let person2 = new Person("Qasim","Qazi",21);
 console.log(person1);
 console.log(person2); 
 
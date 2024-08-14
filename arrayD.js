// array destructuring 

let book =["ES6",180,150,["techgun",2021]];

// let name = book[0];
// let price = book[1];
// let pages = book[2];

let [nam,price,pages,[publication,year]]=book;

console.log(year);
let book={
    Name : "ES6",
    page : 200,
    price :300,
    publication:{
        Pname: "Navazish",
        year : 2000,
    }
}

let {Name,page,price,publication:{Pname,year}} = book;

console.log(year);

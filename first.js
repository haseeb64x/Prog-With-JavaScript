console.log("Welcome to PJS"); //for printing on console

// Data Types
name = "Haseeb";        // String
age = 16;              //  Int , Number
isCnic = false;       //   Boolean True & False
x = undefined;       //    Kuch Ana He
y = null;           //     Empty

console.table(name , age , isCnic, x, y);
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isCnic));
console.log(typeof(x));
console.log(typeof(y));

// Two Types of Data Types

// Primitive     String , Int , number , boolean etc
// Non-Primitive   Array , Function , Objects etc


// Three Types of Data Types

// var (can be redeclared or updated)
// let (cannot be redeclared but can be updated)
// const (Cant be redeclared or updated)

var city = "Karachi";
console.log(city);
city = "Lahore";
console.log(city);
var city = "Faisalabad";
console.log(city);


let Myage = 15;
console.log(Myage);
Myage = 80;
console.log(Myage);


const pie = 3.147;
console.log(pie);
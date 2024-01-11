let myData = {
    name : "Peter",
    city : "Karachi",
    age : 54,
    salary : 1000,
    Garde : "C",
};

// Two Methods of getting data from an object
// First Method 
console.log(myData["city"]);
console.log(myData["age"]);

// Second Method
console.log(myData.salary);
console.log(myData.Garde);
console.log(myData);

// Getting Data with using Loop

for(let i in myData){
    console.log(i , myData[i]);
}


// Logical Operators

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("End Operator");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Comparision
// > Greater than
// < less Than
// >= Greater than equal to
// <= less than equal to

// == it means equal
// === equal with type Check

// Increment 

//for post-increment 
let q = 70
console.log(q++)
console.log(q);
// for pre-increment
let p = 50
console.log(++p);


// Drecrement

// for post-decrement
let a = 30;
console.log(a--);
console.log(a);
// for pre-decrement
let b =50;
console.log(--b);
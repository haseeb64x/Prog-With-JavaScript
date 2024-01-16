// Array Collection of Data 

let heroes =  ["Supra","Corolla","Civic","Bugatti","Agera"]
console.log(heroes);
console.log(heroes[3]); //To print any element 

// Array Methods

// Last index me add kerta ha
console.log(heroes.push("Lamborghini"));
console.log(heroes);
console.log(heroes.length);

// Last index Element ko remove kerta he
console.log(heroes.pop());
console.log(heroes);

// Shift index ke first element ko remove kerta
console.log(heroes.shift());
console.log(heroes);

// UnShift index main aik first element add kerta he
console.log(heroes.unshift("Alto"));
console.log(heroes);

// Slice bech main se array cut kerta he aur print kerta he
console.log(heroes.slice(1,2));

// Splice phela index kis element ko target kerna he wo batata he 
console.log(heroes.splice(3,1, "Kuch new"));
console.log(heroes);

let bbq = ["Tikka","Seekh Kabab","Charga"];
let seafood = ["Fish","Prawns","Lobster"];
let sweetdish = ["Custuard","Ice-Cream","Halwa"];

let menu = bbq.concat(seafood,sweetdish)
console.log(menu);
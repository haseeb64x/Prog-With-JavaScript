let age = 20

if(age>=20){
    console.log("You can Drive")
}if(age<=20){
    console.log("You can't Drive");
}

if(age>=20){
    console.log("You can cast your Vote");
}else{
    console.log("You can't cast your Vote");
}

let mode = prompt(`Enter Your Mode
1)Dark
2)Light`);

let color;

if(mode ==="Dark"){
    color="Black"
}if(mode ==="Light"){
    color="light"
}

console.log("You Choose the Color ", color);
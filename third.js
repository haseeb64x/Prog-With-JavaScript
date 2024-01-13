// let age = 20

// if(age>=20){
//     console.log("You can Drive")
// }if(age<=20){
//     console.log("You can't Drive");
// }

// if(age>=20){
//     console.log("You can cast your Vote");
// }else{
//     console.log("You can't cast your Vote");
// }

// let mode = prompt(`Enter Your Mode
// 1)Dark
// 2)Light`);

// let color;

// if(mode ==="Dark"){
//     color="Black"
// }if(mode ==="Light"){
//     color="light"
// }
// console.log("You Choose the Color ", color);


for(let i=1; i<=10; i++){
    console.log(`${2} x ${i} = ${2*i}`);
}

let myNum = 80;
while(myNum<=84){
    console.log("This is While Loop" , myNum)
    myNum++;
}
let z = 44;
do{
    console.log("This is do while loop" , z);
    z++;
}while (z<=50);

let gameNum = 95;
let userNum = prompt("Enter Your Number");
while(userNum != gameNum){
    userNum = prompt("You Guess the Wrong Number : Guess Again");
}
swal("You Win")
let obj = {
    name : "Haseeb",
    age : 16,
    grade : "A+",
    city : "KCI",
    number : 123
}

for(let n in obj){
    console.log(n,obj[n])
}

let num = 50;
for(let i=0; i<=num; i++){
    if(i%2==0){
        console.log(`${i} is Even`)

    }
    else{
        console.log(`${i} is Odd`)
    }
}
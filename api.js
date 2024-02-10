// setInterval(function(){
//     document.write("Haseeb <br/>")
// },2000)


// setTimeout(function(){
//     document.write("Haseeb <br/>")
// },2000)


// let Mypromise = new Promise(function(resolve , reject){
//         setInterval(function(){
//             document.write("Hello <br/>")
//         },4000)
// });


// let MypromiseTwo = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({name : "Haseeb" , class : 11})
//     },4000)
// });

// MypromiseTwo.then(function(user){
//     return user.name;
// }).then(function(now){
//     console.log(now)
// });


// let promisefour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name : "Haseeb", password : 12345})
//         }else{
//             reject("ERROR : SOMWTHING WENT WORNF HERE")
//         }
//     },4000)
// })

// promisefour
// .then(function(userData){
//     return userData.name
// })
// .then(function(myData){
//     console.log(myData);
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("FINALLY!")
// })



// // PROMISE

// setInterval(function(){
//     document.write("wow!")
// },2000)

// setTimeout(function(){
//     console.log("Hello World");
// },2000)

// PROMISE

// First Promise
// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("This is a promise");
//     },2000)
// })


// // Second Promise
// let promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name: "Henry" , email: "Henry@gmail.com"})
//     },2000)
// })

// // Then is necessary to include in resolve
// promiseTwo.then(function(user){
//     console.log(user);
// })

// // Third Promise
// let promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Mike" , password: "12345"})
//     },4000)
// })

// promiseThree.then(function(myUser){
//     return myUser.password;
// })
// .then(function(abc){
//     console.log(abc);
// })

// // Fourth Promise

// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name: "CAMEL" , password: "54321"})
//         }else{
//             reject("Error : Something went wrong")
//         }
//     },4000)
// })
// promiseFour
// .then(function(userData){
//     return userData.name
// })
// .then(function(myData){
//     console.log(myData);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("Finally");
// })

// // Promise Five

// let promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({car: "VW" , colour : "White"})
//         }else{
//             reject("ERROR : THIS CAR IS NO LONGEREXIST IN STOCK")
//         }
//     },2000)
// })

// async function consumedPromiseFive(){
//     try{
//         let response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumedPromiseFive()


// let promiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         document.write("This Is P1")
//     },2000)
// })

// let promiseTwo = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve("This is P2")
//     },2000)
// })

// promiseTwo.then(function(mytext){
//     console.log(mytext)
// });

// let promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({name : "Ahmed" , email : "ahmed@gmail.com"})
//     },3000)
// })

// promiseThree.then(function(user){
//     return user.email;
// }).then(function(userValue){
//     console.log(userValue)
// })



// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name: "haseeb" , password: "54321"})
//         }else{
//             reject("Error : Something went wrong")
//         }
//     },4000)
// })
// promiseFour
// .then(function(userData){
//     return userData.name
// })
// .then(function(myData){
//     console.log(myData);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("Finally");
// })


let promiseSix = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name : "haseeb" , email : "haseeb@gmail.com"})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    },2000)
})

async function mypromiseSix(){
    try{
        let res = await promiseSix
        console.log(res)
    }
    catch(error){
        console.log("Error")
    }
}

mypromiseSix()
// setInterval(function(){
//     document.write("Haseeb <br/>")
// },2000)


// setTimeout(function(){
//     document.write("Haseeb <br/>")
// },2000)


let Mypromise = new Promise(function(resolve , reject){
        setInterval(function(){
            document.write("Hello")
        },4000)
});


let MypromiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name : "Haseeb" , class : 11})
    },4000)
});

MypromiseTwo.then(function(user){
    return user.name;
}).then(function(now){
    console.log(now)
});


let promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name : "Haseeb", password : 12345})
        }else{
            reject("ERROR : SOMWTHING WENT WORNF HERE")
        }
    },4000)
})

promisefour
.then(function(userData){
    return userData.name
})
.then(function(myData){
    console.log(myData);
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("FINALLY!")
})
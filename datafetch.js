async function datafetch(){
    try{
        let Data = await fetch('https://jsonplaceholder.typicode.com/users');
        let myData = await Data.json();
        document.write(JSON.stringify(myData))
    }
    catch(error){
        console.log("Error")
    }
}
datafetch()
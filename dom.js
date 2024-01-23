let obj = document.getElementById('first');
console.log(obj);

obj.innerHTML="Document Object Model";
obj.style.background = "#F5F5DC";
obj.style.textAlign = "Center";
obj.style.paddingTop = '10px';
obj.style.paddingBottom = '10px';

// let btn = document.querySelector(".btn");
// let container = document.querySelector(".container");

// var flag = 0;
// btn.addEventListener("click", function(){
//     if(flag == 0) {
//         container.classList.add("s1");
//         container.classList.remove("s2");
//         flag = 1
//     }
//     else {
//         container.classList.add("s2");
//         container.classList.remove("s1");
//         flag = 0;
//     }
// })


let div = document.getElementsByClassName('cont')
div[0].innerHTML="Kuch";

let nesw = document.createElement('p');
div[0].appendChild(nesw);
nesw.innerHTML="Helo";

let elm = document.createElement('h1');
nesw.appendChild(elm);
elm.innerHTML="web";

let newBtn = document.createElement('button');
div[0].appendChild(newBtn);

newBtn.innerHTML = "Submit";
newBtn.style.padding = "20px 24px";
newBtn.className = "btn btn-danger";
newBtn.style.fontSize = "24px";

//Event 
newBtn.addEventListener('click' , toggleBtn);
    function toggleBtn(){
        console.log("Clicked of Me")
        newBtn.innerHTML = "Wow";
    }
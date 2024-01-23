let obj = document.getElementById('first');
console.log(obj);

obj.innerHTML="Document Object Model";
obj.style.background = "#F5F5DC";
obj.style.textAlign = "Center";
obj.style.paddingTop = '10px';
obj.style.paddingBottom = '10px';

let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0) {
        container.classList.add("s1");
        container.classList.remove("s2");
        flag = 1
    }
    else {
        container.classList.add("s2");
        container.classList.remove("s1");
        flag = 0;
    }
})
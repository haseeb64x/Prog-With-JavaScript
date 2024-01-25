let div = document.getElementsByClassName('cont')
div[0].innerHTML="Kuch";

let newBtn = document.createElement('button');
div[0].appendChild(newBtn);

newBtn.innerHTML = "Click Here";
newBtn.style.padding = "20px 24px";
newBtn.className = "btn btn-danger";
newBtn.style.fontSize = "24px";
newBtn.style.display = "block";


let dd = document.getElementById('first');
dd.style.textAlign = "center";
dd.style.background = "#FAEBD7";

newBtn.addEventListener("click" , gun)
    function gun(){
        console.log("Button is clicked");
        
    }
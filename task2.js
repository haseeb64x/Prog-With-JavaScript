let dd = document.getElementsByClassName('conter');

let ifld = document.createElement('input');
dd[0].appendChild(ifld);

ifld.addEventListener('keyup' , myf);
    function myf(){
        console.log("Typing...")
    }
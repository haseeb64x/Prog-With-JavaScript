let dd = document.getElementsByClassName('conter');

let ifld = document.createElement('input');
dd[0].appendChild(ifld);

ifld.addEventListener('keyup' , myf);
    function myf(){
        console.log("Typing...")
        
    };
    let newbtn = document.createElement('button');
        dd[0].appendChild(newbtn);
        newbtn.innerHTML = "Clear";
    newbtn.addEventListener("click", tb);
        function tb(){
            ifld.value = "";
        }
        
        
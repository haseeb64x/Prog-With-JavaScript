let btn = document.getElementById('tbtn');
let mq = document.getElementById('mq');
let bulb = document.getElementById('bulb');

btn.addEventListener('click' , toggle)
    function toggle(){
            if(btn.innerHTML.includes('On') && mq.innerHTML.includes('On')){
                bulb.src = "on.png";
                btn.innerHTML = "Turn Off";
                mq.innerHTML = 'Turn Off';
                btn.className = "btn btn-outline-success";
                btn.style.boxShadow = "3px 3px 4px 4px Green";
                mq.style.boxShadow = "3px 3px 4px 4px Green";    
            }
            else{
                bulb.src = "off.png";
                btn.innerHTML = "Turn On";
                mq.innerHTML = 'Turn On';
                btn.className = "btn btn-outline-danger";
                btn.style.boxShadow = "3px 3px 4px 4px red";
                mq.style.boxShadow = "3px 3px 4px 4px red"; 
            }
    }
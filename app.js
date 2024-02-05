



// selecting all buttons
let buttons=document.querySelectorAll('button');

// selecting input
let inp=document.querySelector('input');

for(let btn of buttons){
    btn.addEventListener('click',function(event){
        let text=event.target.innerText;
        if(text==='C'){
            inp.value='';
        }
        else if(text==='='){
            try{
                inp.value=eval(inp.value);
                // setTimeout(function(){
                //     inp.value='';
                // },10000);
            }
            catch(e){
                inp.value='Error';
                // setInterval(function(){
                //     inp.value='';
                // },3000);
            }
        }
        else{
            inp.value+=text;   
        }
    })
}
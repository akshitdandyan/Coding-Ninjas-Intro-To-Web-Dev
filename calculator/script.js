var buttons = document.getElementsByClassName('all');
var display = document.getElementById('display');
var op1; var op2;
var op;
for (i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
            var value=this.getAttribute('data-value');
            if(value=='AC'){
                display.innerText='';
            }else if(value=='+'){
                op1=parseFloat(display.textContent);
                op='+';
                display.innerText='';
            }else if (value=='-'){
                op1=parseFloat(display.textContent);
                display.innerText='';
                op='-';
            }else if (value=='/'){
                op1=parseFloat(display.textContent);
                display.innerText='';
                op='/'
            }else if(value=='X'){
                op1=parseFloat(display.textContent);
                display.innerText='';
                op='*'
            }else if(value=='%'){
                op1=parseFloat(display.textContent);
                display.innerText='';
                op='%'
            }else if(value=='.'){
                op1=parseFloat(display.textContent);
                display.innerText+='.';
            }else if(value=='='){
                op2=parseFloat(display.textContent);
                result=(eval(op1+op+op2));
                display.innerText=result;
                console.log(result);
            }else{
                display.innerText+=value;
            }
    });
}





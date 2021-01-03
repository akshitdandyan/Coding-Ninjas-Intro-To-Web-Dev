var n4i=1; var n3i=1; var n2i=1; var n1i=1; var n0i=1;
var np4=document.getElementsByClassName("pri")[4];
var ns4=document.getElementsByClassName("sec")[4];
var np3=document.getElementsByClassName("pri")[3];
var ns3=document.getElementsByClassName("sec")[3];
var np2=document.getElementsByClassName("pri")[2];
var ns2=document.getElementsByClassName("sec")[2];
var np1=document.getElementsByClassName("pri")[1];
var ns1=document.getElementsByClassName("sec")[1];
var np0=document.getElementsByClassName("pri")[0];
var ns0=document.getElementsByClassName("sec")[0];
function startCounter(){
    n4i=1;
    var interval = setInterval(
function (){
    var result =(np0.innerHTML+np1.innerHTML+np2.innerHTML+np3.innerHTML+ns4.textContent);
    var inp=document.getElementById("input").value;
    (parseInt(result),parseInt(inp));
    if(inp<1 || inp>99999){window.alert("Out of range")}
    if(parseInt(inp)==parseInt(result) || parseInt(inp)==99999){
        window.alert("Counter has  stopped!");
        console.log("Stopped here!");
        clearInterval(interval);
        return;
    }

// last div
    ns4.classList.add("animate");
    ns4.innerHTML=n4i;
    setTimeout(function(){
        if(n4i==0){
        np4.innerHTML=9;
        }
        else{np4.innerHTML=n4i-1}
    },500)
    setTimeout(function(){
        ns4.classList.remove("animate");
    }, 500);
    n4i++;
// last second div

    if(ns4.innerHTML==9){
    setTimeout(() => {
        n4i=0;
    }, -500);
    setTimeout(function(){
        ns3.classList.add("animate");
        ns3.innerHTML=n3i;
    setTimeout(function(){
            np3.innerHTML=n3i-1;
        },500)    
    setTimeout(function(){
        ns3.classList.remove("animate");
    },500);
    n3i++;
    },1000) 
    // last 3rd div
    if (ns3.innerHTML==9){
        n3i=0;
        setTimeout(function(){
            ns2.classList.add("animate");
            ns2.innerHTML=n2i;
        setTimeout(function(){
                np2.innerHTML=n2i-1;
            },500)    
        setTimeout(function(){
            ns2.classList.remove("animate");
        },500);
        n2i++;
        },1000) 
    // last 2nd div
    if (ns2.innerHTML==9){
        n2i=0;
        setTimeout(function(){
            ns1.classList.add("animate");
            ns1.innerHTML=n1i;
        setTimeout(function(){
            np1.innerHTML=n1i-1;
            },500)    
        setTimeout(function(){
            ns1.classList.remove("animate");
        },500);
        n1i++;
        },1000) 
    // last div
    if (ns1.innerHTML==9){
        n1i=0;
        setTimeout(function(){
            ns0.classList.add("animate");
            ns0.innerHTML=n0i;
        setTimeout(function(){
            np0.innerHTML=n0i-1;
            },500)    
        setTimeout(function(){
            ns0.classList.remove("animate");
        },500);
        n0i++;
        },1000) 



    }
    }
    }
    }

    


}, 1000);
}

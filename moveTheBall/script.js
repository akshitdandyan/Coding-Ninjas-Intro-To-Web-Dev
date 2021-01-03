var ball =document.getElementById("ball").style;
var y=46;
var z=46;
var anglex=10;
document.addEventListener('keydown',function(){
    if(ball.top=="0vh" || ball.left=="0vw" || ball.top=="93vh" || ball.left=="93vw"){
        window.alert("Do not go outside the field.");
        resetPosition()
    }
    if(event.keyCode==87 || event.keyCode==38){
     ball.top=y+"vh";
     ball.transform="rotate("+anglex+"deg)";
     anglex+=10;
     y--;
    }
    else if(event.keyCode==83 || event.keyCode==40){
        ball.top=y+"vh";
        ball.transform="rotate("+anglex+"deg)";
        anglex-=10;
        y++;
    }
    else if(event.keyCode==65 || event.keyCode==37){
        ball.left=z+"vw";
        ball.transform="rotate("+anglex+"deg)";
        anglex-=10;
        z--;
    }
    else if(event.keyCode==68 || event.keyCode==39){
        ball.left=z+"vw";
        ball.transform="rotate("+anglex+"deg)";
        anglex+=10;
        z++;
    }
    else if(event.keyCode==27){
        ball.left="47vw";
        ball.top="47vh"
        y=46;
        z=46;
    }
})
function resetPosition(){
    ball.left="47vw";
    ball.top="47vh"
    y=46;
    z=46;
}
// --------------------------------
// controls mobile size
function up(){
    ball.left=z+"vw";
    ball.transform="rotate("+anglex+"deg)";
    anglex+=10;
    z++;
}
function down(){
    ball.left=z+"vw";
    ball.transform="rotate("+anglex+"deg)";
    anglex-=10;
    z--;
}
function right(){
    ball.top=y+"vh";
    ball.transform="rotate("+anglex+"deg)";
    anglex+=10;
    y--;
}
function left(){
    ball.top=y+"vh";
    ball.transform="rotate("+anglex+"deg)";
    anglex-=10;
    y++;
}
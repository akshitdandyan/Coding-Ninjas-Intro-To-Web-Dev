
//fetching both rods
var p1 = document.getElementsByClassName("p")[0];
var p2 = document.getElementsByClassName("p")[1];

if(localStorage.getItem("Rod 1")==null || localStorage.getItem("Rod 2"==null)){
    alert("This is your first time.");
}
else{
    if( parseInt(localStorage.getItem("Rod 1")) > parseInt(localStorage.getItem("Rod 2"))){
        console.log("Rod 1:"+parseInt(localStorage.getItem("Rod 1"))+" Rod 2:"+parseInt(localStorage.getItem("Rod 2")))
        alert("Rod 1 has maximum score of "+localStorage.getItem("Rod 1"));
    }
    else{
        alert("Rod 2 has maximum score of "+localStorage.getItem("Rod 2"));
    }
}

// code: controlling rods
var c=40;
document.addEventListener('keydown',function(){
    if(p1.style.marginLeft!=-1+'vw' && event.keyCode==65 || event.keyCode==37 && p1.style.marginLeft!=-1+'vw'){
        c-=2;
        p1.style.marginLeft=c+'vw';
        p2.style.marginLeft=c+'vw';
        c-=1;
    }
    else if(p1.style.marginLeft!=75+'vw' && event.keyCode==68 || event.keyCode==39 && p1.style.marginLeft!=75+'vw'){
        c+=2;
        p1.style.marginLeft=c+'vw';
        p2.style.marginLeft=c+'vw';
        c+=1;
    }
})

// code:mobile button controls
function left(){
    if(p1.style.marginLeft!=-1+'vw'){
    c-=2;
    p1.style.marginLeft=c+'vw';
    p2.style.marginLeft=c+'vw';
    c-=1;}
}
function right(){
    if(p1.style.marginLeft!=75+'vw'){
    c+=2;
    p1.style.marginLeft=c+'vw';
    p2.style.marginLeft=c+'vw';
    c+=1;}
}

// code: Start Game i.e. Ball begins to move
var ball=document.getElementById("ball").style;
var i=0,rod1="rod1",rod2="rod2",ballPos=49,score1=0,score2=0;
function moveBall(){
    if(ballPos>c && ballPos<c+24){
            function topToBottom(){
                ball.top='91vh';
                var x=Math.floor(Math.random()*90);
                ball.left=x+'vw';
                score1+=100
                ballPos=x;
               }
               topToBottom()
            }
            else{
                console.log("YESSSSSSSSSSSSSSS");
                if(score2 > parseInt(localStorage.getItem("Rod 1")) || score2>parseInt(localStorage.getItem("Rod 2"))  ||localStorage.getItem("Rod 2")==null){
                    localStorage.setItem("Rod 2",score2);
                    }
                alert("Rod 2 wins with a score of "+score2)
                location.reload()
                return
            }
    setTimeout(function(){
        if(ballPos>c && ballPos<c+24){
                function bottomToTop(){
                    ball.top='4vh';
                    var x=Math.floor(Math.random()*90);
                    ball.left=x+'vw';
                    score2+=100;
                    ballPos=x;
                }
                bottomToTop()
            }
            else{
                console.log("YESSSSSSSSSSSSSSS");
                if(parseInt(localStorage.getItem("Rod 1")) > parseInt(localStorage.getItem("Rod 2")) || localStorage.getItem("Rod 1")==null){
                localStorage.setItem("Rod 1",score1);
                }
                alert("Rod 1 wins with a score of "+score1)
                location.reload()
                return
            }
    },2000)

document.addEventListener('keydown',function(){if (event.keyCode==32){location.reload()}})
}
console.log(localStorage.getItem("Rod 1")+"  "+localStorage.getItem("Rod 2"))


function startGame(){
    moveBall()
    var gameStarted=setInterval(moveBall,4000);
}

// Code: Game start when Enter key is pressed
document.addEventListener('keydown',function(){if (event.keyCode==13){return startGame()}})


// / debugging purpose code
// console.log(document.addEventListener('keydown',function(){console.log(event.keyCode)}))

















/*

var randomNo=Math.floor(Math.random()*80);
function moveBall(){
    ball.style.top='91vh';
    ball.style.left=randomNo+'vw';
    function restartGame(){
        ball.style.top='4vh';
        ball.style.left='49vw';
        clearInterval(topToBottom);
        clearInterval(bottomToTop);
        console.log("restart game called");
        return
    }
    var topToBottom=setInterval(function(){
        if (ball.style.top =='91vh'){
            let randomNo=Math.floor(Math.random()*55)+45;  console.log(randomNo)
            ball.style.top=randomNo+'vh';
            // code: If ball strikes with wall
            if (randomNo>4){
                ball.style.left='94vw';
            }
            setTimeout(function(){
                if(ball.style.left=='94vw'){ console.log("bottom to top")
                ball.style.top='4vh';
                let randomNo=Math.floor(Math.random()*80);
                ball.style.left=randomNo+"vw";
            }
            },1000)
            // code: Restart
            document.addEventListener('keydown',function(){
                if (event.keyCode==81){
                    return restartGame()
                }
                })
        }
    },1000)
    var bottomToTop=setInterval(function(){
        if (ball.style.top=='4vh'){
            let randomNo=Math.floor(Math.random()*55)+45;
            ball.style.top=randomNo+'vh';
            // if ball strikes with wall
            if (randomNo<91){
                ball.style.left='2vw';
            }
            setTimeout(function(){
                if(ball.style.left=='2vw'){ console.log("top to bottom")
                ball.style.top='91vh';
                let randomNo=Math.floor(Math.random()*80);
                ball.style.left=randomNo+"vw";
            }
            },900)


            // code: Restart
            document.addEventListener('keydown',function(){
                if (event.keyCode==81){
                    return restartGame()
                }
                })
        }
    },1000)

}
*/
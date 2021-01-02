














// song play/pause
var audio = document.getElementById("current-song")
var p=document.getElementById("play")
function play(){
    document.getElementById("playP").style.display='none';
    document.getElementById("pauseP").style.display='inline';
    audio.play();
}
function pause(){
    document.getElementById("playP").style.display='inline';
    document.getElementById("pauseP").style.display='none';
    audio.pause();
}
// playlist dropdown
function playlistDropdown(){
    if (document.getElementById("playlistDropdown").style.display=='inline'){
        document.getElementById("playlistDropdown").style.display='none';
    }
    else{
        document.getElementById("playlistDropdown").style.display='inline';
    }
    
}
// latest release dropdown
function lRsDropdown1(){
    if (document.getElementById("lr1").style.display=='block'){
        document.getElementById("lr1").style.display='none';
    }
    else{
        document.getElementById("lr1").style.display='block';
    }
}
function lRsDropdown2(){
    if (document.getElementById("lr2").style.display=='block'){
        document.getElementById("lr2").style.display='none';
    }
    else{
        document.getElementById("lr2").style.display='block';
    }
}
function lRsDropdown3(){
    if (document.getElementById("lr3").style.display=='block'){
        document.getElementById("lr3").style.display='none';
    }
    else{
        document.getElementById("lr3").style.display='block';
    }
}
function lRsDropdown4(){
    if (document.getElementById("lr4").style.display=='block'){
        document.getElementById("lr4").style.display='none';
    }
    else{
        document.getElementById("lr4").style.display='block';
    }
}

// menuopen
function menuOpen(){
    document.getElementById("menuOpen").style.display='inline';
    document.getElementById("queue").style.display='none';
}
function menuClose(){
    document.getElementById("menuOpen").style.display='none';
    document.getElementById("aside").style.display='none';
    document.getElementById("main").style.filter='blur(0px)';
}
// openQ
function openQ(){
    document.getElementById("queue").style.display='block';
    document.getElementById("menuOpen").style.display='none';
}
function closeQ(){
    document.getElementById("queue").style.display='none';
    document.getElementById("menuOpen").style.display='none';
}
// recentlyplayed
function recentlyPlayed(){
    document.getElementById("aside").style.display='inline';
    document.getElementById("main").style.filter='blur(50px)';
}


//alert
function elert(name){
    alert(name);
}
// next song
function next(){
    audio.pause();
    document.getElementById("current-song-2").play();
}
// add to fvrt 01
function addtofvrt(){
    document.getElementsByClassName("addtofvrtq")[0].style.display='none';
    document.getElementsByClassName("addedtofvrtq")[0].style.display='inline'
}
function addedtofvrt(){
    document.getElementsByClassName("addedtofvrtq")[0].style.display='none'
    document.getElementsByClassName("addtofvrtq")[0].style.display='inline';
}
// 02
function addtofvrt2(){
    document.getElementsByClassName("addtofvrtq")[1].style.display='none';
    document.getElementsByClassName("addedtofvrtq")[1].style.display='inline'
}
function addedtofvrt2(){
    document.getElementsByClassName("addedtofvrtq")[1].style.display='none'
    document.getElementsByClassName("addtofvrtq")[1].style.display='inline';
}
// 03
function addtofvrt3(){
    document.getElementsByClassName("addtofvrtq")[2].style.display='none';
    document.getElementsByClassName("addedtofvrtq")[2].style.display='inline'
}
function addedtofvrt3(){
    document.getElementsByClassName("addedtofvrtq")[2].style.display='none'
    document.getElementsByClassName("addtofvrtq")[2].style.display='inline';
}


var nyan = document.getElementById("nyan");
var nyanBtn = document.getElementById("nyan-btn");

nyanBtn.onclick = function(){
    if (nyan.paused && nyan.currentTime >= 0 && !nyan.ended) {
                 nyan.play();
             nyanBtn.src = "media/pause.webp";
}else {
    nyan.pause();
    nyanBtn.src ="media/play.webp"
}
} 

function reset(btn, song) {
    if (btn.classList.contains('playing')) {
        btn.classList.toggle('playing');
    }
    song.pause();
    song.currentTime = 0;
}

function progress(btn, song) {
    setTimeout(function () {
        var end = song.duration;
        var current = song.currentTime;
        var percent = current / (end / 100);
        //check if song is at the end
        if (current == end) {
            reset(btn, song);
        }
        //set inset box shadow
        btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
        //call function again
        progress(btn, song);
    }, 133.7);
}

if(nyanBtn){
    nyanBtn.addEventListener('click', function () {
        nyanBtn.classList.toggle('playing');
        playPause(nyan);
        progress(nyanBtn, nyan);
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for book2
var nyan2 = document.getElementById("nyan2");
var nyanBtn2 = document.getElementById("nyan-btn2");

nyanBtn2.onclick = function(){
    if (nyan2.paused && nyan2.currentTime >= 0 && !nyan2.ended) {
                 nyan2.play();
             nyanBtn2.src = "media/pause.webp";
}else {
    nyan2.pause();
    nyanBtn2.src ="media/play.webp"
}
} 

function reset(btn, song) {
    if (btn.classList.contains('playing')) {
        btn.classList.toggle('playing');
    }
    song.pause();
    song.currentTime = 0;
}

function progress(btn, song) {
    setTimeout(function () {
        var end = song.duration;
        var current = song.currentTime;
        var percent = current / (end / 100);
        //check if song is at the end
        if (current == end) {
            reset(btn, song);
        }
        //set inset box shadow
        btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
        //call function again
        progress(btn, song);
    }, 133.7);
}

if(nyanBtn2){
    nyanBtn2.addEventListener('click', function () {
        nyanBtn2.classList.toggle('playing');
        playPause(nyan2);
        progress(nyanBtn2, nyan2);
    });
}
//////////////////////////////////////////////////////////////////////////////////////
//for book 3
var nyan3 = document.getElementById("nyan3");
var nyanBtn3 = document.getElementById("nyan-btn3");

nyanBtn3.onclick = function(){
    if (nyan3.paused && nyan3.currentTime >= 0 && !nyan3.ended) {
                 nyan3.play();
             nyanBtn3.src = "media/pause.webp";
}else {
    nyan3.pause();
    nyanBtn3.src ="media/play.webp"
}
} 

function reset(btn, song) {
    if (btn.classList.contains('playing')) {
        btn.classList.toggle('playing');
    }
    song.pause();
    song.currentTime = 0;
}

function progress(btn, song) {
    setTimeout(function () {
        var end = song.duration;
        var current = song.currentTime;
        var percent = current / (end / 100);
        //check if song is at the end
        if (current == end) {
            reset(btn, song);
        }
        //set inset box shadow
        btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
        //call function again
        progress(btn, song);
    }, 133.7);
}

if(nyanBtn3){
    nyanBtn3.addEventListener('click', function () {
        nyanBtn3.classList.toggle('playing');
        playPause(nyan3);
        progress(nyanBtn3, nyan3);
    });
}
//////////////////////////////////////////////////////////////
//for book4
var nyan4 = document.getElementById("nyan4");
var nyanBtn4 = document.getElementById("nyan-btn4");

nyanBtn4.onclick = function(){
    if (nyan4.paused && nyan4.currentTime >= 0 && !nyan4.ended) {
                 nyan4.play();
             nyanBtn4.src = "media/pause.webp";
}else {
    nyan4.pause();
    nyanBtn4.src ="media/play.webp"
}
} 

function reset(btn, song) {
    if (btn.classList.contains('playing')) {
        btn.classList.toggle('playing');
    }
    song.pause();
    song.currentTime = 0;
}

function progress(btn, song) {
    setTimeout(function () {
        var end = song.duration;
        var current = song.currentTime;
        var percent = current / (end / 100);
        //check if song is at the end
        if (current == end) {
            reset(btn, song);
        }
        //set inset box shadow
        btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
        //call function again
        progress(btn, song);
    }, 133.7);
}

if(nyanBtn4){
    nyanBtn4.addEventListener('click', function () {
        nyanBtn4.classList.toggle('playing');
        playPause(nyan4);
        progress(nyanBtn4, nyan4);
    });
}


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
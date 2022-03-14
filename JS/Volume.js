const play = document.querySelectorAll(".play-button");
const audioBooks = document.querySelectorAll("audio");
let progress = document.querySelectorAll('.progress');
let durationIndicator = document.querySelectorAll(".duration");
let currentTimeIndicator = document.querySelectorAll(".current-time");
const progressBar = document.querySelectorAll('.progress-div');
const volumeIcon = document.querySelectorAll(".volume-button");
const volumeIndicator = document.querySelectorAll(".volume-indicator");
const card = document.querySelectorAll(".audio-book-card");
let isAudioPlaying = false;


for (let j = 0; j < play.length; j++) {
    //Increase or Decrease Volume
    let initialVolume = volumeIndicator[j].value;
    volumeIcon[j].addEventListener("mouseover", () => {
        volumeIcon[j].style.right = "100px";
        let volumeBarNotVisible = document.querySelectorAll(".not-showing");
        let volumeBarVisible = document.querySelectorAll(".showing");
        if (volumeBarVisible.length == 0) {
            volumeIndicator[j].style.display = "block";
            volumeIndicator[j].classList.replace("not-showing", "showing");
        }
        else {
            volumeBarVisible.forEach((volume_bar) => {
                volume_bar.style.display = "none";
                volume_bar.classList.replace("showing", "not-showing");
            })
            volumeIndicator[j].style.display = "block";
            volumeIndicator[j].classList.replace("not-showing", "showing");

        }
    })


    volumeIndicator[j].addEventListener("mouseout", () => {
        volumeIndicator[j].style.display = "none";
        volumeIcon[j].style.right = "20px";
    })



    volumeIcon[j].addEventListener("click", () => {
        audioBooks[j].volume = 0;
        if (volumeIcon[j].classList.contains('fa-volume-off') == true) {
            audioBooks[j].volume = initialVolume / 100;
            volumeIndicator[j].value = initialVolume;
            volumeIcon[j].classList.replace("fa-volume-off", "fa-volume-up");
        } else {
            volumeIcon[j].classList.replace("fa-volume-up", "fa-volume-off");
            volumeIndicator[j].value = 0;

        }
    })
    volumeIndicator[j].addEventListener("input", () => {
        audioBooks[j].volume = (volumeIndicator[j].value) / 100;
        if (volumeIndicator[j].value == 0) {
            audioBooks[0].volume = 0;
            volumeIcon[j].classList.replace("fa-volume-up", "fa-volume-off");
        } else {
            volumeIcon[j].classList.replace("fa-volume-off", "fa-volume-up");

        }

    })
    //Pause functionality
    const pauseAudioBook = () => {
        isAudioPlaying = false;
        audioBooks[j].pause();
        play[j].classList.replace('fa-pause', 'fa-play');
        play[j].style.left = "2px";
        play[j].classList.add("not-playing");
    };
    // Play functionality
    const playAudioBook = () => {
        isAudioPlaying = true;
        let noOfAudioNotPlaying = document.querySelectorAll(".not-playing");
        if (noOfAudioNotPlaying.length == 4) {
            audioBooks[j].play();
            play[j].classList.replace('fa-play', 'fa-pause');
            play[j].style.left = "1px";
            play[j].classList.remove("not-playing");

        } else {
            if (noOfAudioNotPlaying.length < 4) {
                noOfAudioNotPlaying.forEach((audio_book) => {
                    let audioTag = audio_book.parentElement.parentElement.parentElement.querySelector("audio");
                    audioTag.pause();
                })
                if (noOfAudioNotPlaying.length == 4) {
                    audioBooks[j].play();
                    play[j].classList.replace('fa-play', 'fa-pause');
                    play[j].style.left = "1px";
                    play[j].classList.remove("not-playing");
                }

            };
        }
    };

    play[j].addEventListener("click", () => {
        if (isAudioPlaying) {
            pauseAudioBook();
        }
        else {
            playAudioBook();
        }
    });
    //Audio Time Change functionality
    audioBooks[j].addEventListener('timeupdate', (event) => {
        const { currentTime, duration } = event.srcElement;
        let audioProgressTime = (currentTime / duration) * 100;
        progress[j].style.width = `${audioProgressTime}%`;
        let minuteDuration = Math.floor(duration / 60);
        let secondDuration = Math.floor(duration % 60);
        if (secondDuration < 10) {
            secondDuration = `0${secondDuration}`;
        }
        let totalDuration = `${minuteDuration}:${secondDuration}`;
        durationIndicator[j].textContent = `${totalDuration}`;
        let minuteCurrentTime = Math.floor(currentTime / 60);
        let secondCurrentTime = Math.floor(currentTime % 60);
        if (secondCurrentTime < 10) {
            secondCurrentTime = `0${secondCurrentTime}`;
        }
        let totalCurrentTime = `${minuteCurrentTime}:${secondCurrentTime}`;
        currentTimeIndicator[j].textContent = `${totalCurrentTime}`;


    })
    progressBar[j].addEventListener("click", (event) => {
        const { duration } = audioBooks[j];
        let move_progress = ((event.offsetX / event.srcElement.clientWidth) * duration);
        audioBooks[j].currentTime = move_progress;
    })
    audioBooks[j].addEventListener("ended", (event) => {
        play[j].classList.replace('fa-pause', 'fa-repeat');
        pauseAudioBook();
        play[j].addEventListener('click', (event) => {
            playAudioBook();
            play[j].classList.replace('fa-repeat', 'fa-pause');
            play[j].addEventListener('click', (event) => {

                if (isAudioPlaying) {
                    pauseAudioBook();
                }
                else {
                    playAudioBook();
                }
            })
        })
    })
}

function feedbackvalidate() {
    let x = document.forms["feedbackform"]["feedback"].value;
    if (x == "") {
        alert("Feedback must be filled out");
        return false;
    }
    else {
        alert("Thanks for your feedback");
        return true;
    }
}
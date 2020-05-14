var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function(params) {
    //video.fastSeek(570); // 9:30
    // video.currentTime = 570; //test
    togglePlayPause();
}

video.addEventListener('timeupdate', function() {
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if (video.ended) {
        btn.className = "play";
        // At the end of the movie, reset the position to the start and pause the playback.
        video.currentTime = 0;
        togglePlayPause();
    }
});

document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
    console.log("应该播放音乐");
});
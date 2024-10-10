// 确保DOM完全加载后再执行
$(document).ready(function() {
    var audio = $('.song')[0];
    audio.play();
    console.log("应该播放音乐了！")
});
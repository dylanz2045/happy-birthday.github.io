// 确保DOM完全加载后再执行
$(document).ready(function() {
    var audio = $('.song')[0];
    audio.play();
});
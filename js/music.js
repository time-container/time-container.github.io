function music_on(){
    var musicbox=["https://static-music-1253741713.cos.ap-beijing.myqcloud.com/blog-bgm.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/17.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/Just-live_for_you_one_day.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/dreamitpossible.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/betweenworlds.mp3"];
    var audio1=document.getElementById('bg_music');
    if(audio1.paused){
        var index=Math.floor((Math.random()*musicbox.length));
        $("#bg_music").attr("src",musicbox[index]);
        audio1.play();
        audio1.volume=0.7;
        document.getElementById("musicmobbtn").children[0].classList.add("xuanzhuan");
        //$("#musicmobbtn").children("svg").addClass("xuanzhuan");
    }
    else{
        audio1.pause();
        document.getElementById("musicmobbtn").children[0].classList.remove("xuanzhuan");
        //$("#musicmobbtn").children("svg").removeClass("xuanzhuan");
        audio1.currentTime=0;
    }
}

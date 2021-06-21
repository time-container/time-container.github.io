function music_on(){
    var musicbox=["https://static-music-1253741713.cos.ap-beijing.myqcloud.com/64-%E5%8D%A2%E5%86%A0%E5%BB%B7%2C%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/61-%E5%88%98%E5%BE%B7%E5%8D%8E%20-%20%E4%B8%80%E8%B5%B7%E8%B5%B0%E8%BF%87%E7%9A%84%E6%97%A5%E5%AD%90.mp3"];
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

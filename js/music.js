function music_on(){
    var musicbox=["https://static-music-1253741713.cos.ap-beijing.myqcloud.com/1-BEYOND%20-%20%E4%B8%8D%E5%86%8D%E7%8A%B9%E8%B1%AB.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/61-%E5%88%98%E5%BE%B7%E5%8D%8E%20-%20%E4%B8%80%E8%B5%B7%E8%B5%B0%E8%BF%87%E7%9A%84%E6%97%A5%E5%AD%90.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/114-%E9%83%91%E4%BC%8A%E5%81%A5%20-%20%E7%83%AD%E8%A1%80%E7%87%83%E7%83%A7.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/%E5%AE%9D%E7%9F%B3gem%20-%20%E9%87%8E%E7%8B%BCdisco.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/%E5%AE%8B%E6%99%93%E5%B3%B0%20-%20%E4%BA%B2%E7%88%B1%E7%9A%84%E5%A7%91%E5%A8%98.flac"];
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

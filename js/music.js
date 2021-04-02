function music_on(){
    var musicbox=["https://static-music-1253741713.cos.ap-beijing.myqcloud.com/1-BEYOND%20-%20%E4%B8%8D%E5%86%8D%E7%8A%B9%E8%B1%AB.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/Ice%20Paper%20-%20%E5%BF%83%E5%A6%82%E6%AD%A2%E6%B0%B4.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/%E7%8E%8B%E8%B4%B0%E6%B5%AA-%E5%83%8F%E9%B1%BC.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/%E5%AE%9D%E7%9F%B3gem%20-%20%E9%87%8E%E7%8B%BCdisco.mp3","https://static-music-1253741713.cos.ap-beijing.myqcloud.com/%E8%B5%B5%E9%9B%B7-%E6%88%90%E9%83%BD.mp3"];
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

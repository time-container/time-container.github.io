function music_on(){
    var musicbox=["https://blog.bestzuo.cn/blog-bgm.mp3","https://blog.bestzuo.cn/所爱隔山海.mp3","https://blog.bestzuo.cn/between worlds.mp3","https://blog.bestzuo.cn/stay with me.mp3", "https://s101.lzjoy.com/res/statics/fileupload/normal/202004/1c7b7bce5e8c52e912061.mp3?451b467b752b6af0d8c1badda9756f60f1e58917"];
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
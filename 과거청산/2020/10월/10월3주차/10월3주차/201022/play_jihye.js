// Headfirst JS - 5. play

var song = {
    name: "행진",
    artist: "들국화",
    minutes: 4,
    seconds: 3,
    genre: "80년대",
    playing: false,

    play: function(){
        if (!this.playing){
            this.playing = true;
            console.log(this.artist + "의 " + this.name + "을 재생중입니다.");
        }
    },

    pause: function(){
        if (this.playing){
            this.playing = false;
        }
    }
};

song.play();
song.pause();
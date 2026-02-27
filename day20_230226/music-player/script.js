const like = document.querySelector("#song-image i");
const audio = document.querySelector("#audio");
const playBtn = document.querySelector("#pause i");
const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
const progressBar = document.querySelector("#progress-bar");
const currTime = document.querySelector("#curr-time");
const duration = document.querySelector("#duration");

let songName = document.querySelector("#song-name");
let songAuthor = document.querySelector("#song-author");
let songImage = document.querySelector("#song-image img");
let fileName = audio.src.split("/");
fileName = fileName[fileName.length-1].replace(".mp3", "").replaceAll("%20", " ");

console.log(fileName);



let isLiked = false;
let isPlaying = false;

// like functionality 
like.addEventListener("click", ()=>{
    isLiked = !isLiked;

    if(isLiked){
        like.classList.replace("ri-poker-hearts-line", "ri-poker-hearts-fill");
        like.classList.add("liked");
    }else{
        like.classList.replace("ri-poker-hearts-fill", "ri-poker-hearts-line");
        like.classList.remove("liked");
    }
})


// play pause functionality 


const play = ()=>{
    audio.play();
    playBtn.classList.replace( "ri-play-circle-fill", "ri-pause-circle-fill");
    songImage.classList.add("rotate")
}

const pause = ()=>{
    audio.pause();
    playBtn.classList.replace(  "ri-pause-circle-fill", "ri-play-circle-fill");
    songImage.classList.remove("rotate")
}

playBtn.addEventListener("click", ()=>{
    isPlaying = !isPlaying;
    if(isPlaying){
        play();
    }else{
        pause();
    }
})



audio.addEventListener("timeupdate", ()=>{
    if(audio.duration){
        currTime.textContent = audio.currentTime;
        duration.textContent = audio.duration;
        const songProgress = (audio.currentTime/audio.duration) * 100;
        progressBar.value = `${songProgress}`;
        progressBar.style.background = 
        `linear-gradient(to right, #5CC656 ${progress}%, white ${progress}%)`;
    }
})

progressBar.addEventListener("input", ()=>{
    if(audio.duration){
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
})


// audio.addEventListener("loadeddata", ()=>{
//     jsmediatags.read(audio.src, {
//         onSuccess: function(tag){
//             const tags = tag.tags;

//             songAuthor.textContent=tag.artist || "Unknown Artist";

//             if(tag.picture){
//                 const {data, format} = tags.picture;

//                 let base64string = "";
//                 for(let i = 0; i < data.length ; i++){
//                     base64string += String.fromCharCode(data[i]);
//                 }

//                 const imageUrl = `data:${format};base64,${window.btoa(base64string)}`;
//                 songImage.src = imageUrl;
//             }
//         },
//         onError: function(error){
//             console.log("Metadata error : ", error);
//         }
//     })
// })

// const arr = ["./songs/Pehli_Dafa_Atif_Aslam.webp","./bebu/assets/pehli-dafa.jpeg" ]
// let i = 0;
// setInterval(()=>{
//     songImage.style.opacity = 0.5;

//     setTimeout(()=>{
//         i = (i+1) % arr.length;
//         songImage.src = arr[i];
//         songImage.style.opacity = 1;
//     }, 1000)
// },2000)

// array me songs location hogi
// for song of songs 
//  pehleh 0 wala put kardo 
// phir jab click ho toh ++ kardeh
// next song
let currentSong = 0;
const songs = [
    {
        songName: "Pehli Dafa",
        image : "./songs/Pehli_Dafa_Atif_Aslam.webp",
        src: "./songs/Pehli Dafa.mp3",
        author : "Avyaan Verma",
    },
    {
        songName: "Hanuman Chalisa",
        image : "./songs/hanuman-chalisa-1440_1721976967.webp",
        src: "./songs/Shree Hanuman CHalisa.mp3",
        author : "Gulshan Kumar",
    },
];



// listing songs folder ,making arr
function updateSong(currSong){
    songName.textContent = songs[currSong].songName;
    songImage.src = songs[currSong].image;
    audio.src = songs[currSong].src;
    songAuthor.textContent = songs[currSong].author;
}

updateSong(0);
nextBtn.addEventListener("click", ()=>{
    currentSong = (currentSong + 1) % songs.length;
    updateSong(currentSong);
    play();
})
prevBtn.addEventListener("click", ()=>{
    currentSong = currentSong == 0 ? songs.length -1 : currentSong - 1;
    updateSong(currentSong);
    play();
})


/* autoplay */
audio.addEventListener("ended", ()=>{
    currentSong = (currentSong + 1) % songs.length;
    updateSong(currentSong);
    play();
})


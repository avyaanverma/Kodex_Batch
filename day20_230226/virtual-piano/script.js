const keys = document.querySelectorAll(".key");
const sounds = {
    "white": {
        1 : new Audio("./assets/keys/C4.mp3"),
        2 : new Audio("./assets/keys/D4.mp3"),
        3 : new Audio("./assets/keys/E4.mp3"),
        4 : new Audio("./assets/keys/F4.mp3"),
        5 : new Audio("./assets/keys/G4.mp3"),
        6 : new Audio("./assets/keys/A4.mp3"),
        7 : new Audio("./assets/keys/B4.mp3"),
        8 : new Audio("./assets/keys/C5.mp3")
    },
    "black":{
        0 : new Audio("./assets/keys/Bb3.mp3"),
        1 : new Audio("./assets/keys/Db4.mp3"),
        2 : new Audio("./assets/keys/Eb4.mp3"),
        3 : new Audio("./assets/keys/Gb4.mp3"),
        4 : new Audio("./assets/keys/Ab4.mp3"),
        5 : new Audio("./assets/keys/Bb4.mp3"),
    }
}  


let ind = 0;
keys.forEach((key, index)=>{
    if( !(index==0 || index == keys.length - 1)) {
        key.addEventListener("mousedown", function(e){
            key.classList.add("active");
            let sound = sounds.white[index];
            if(sound){
                sounds["white"][index].currentTime = 0;
                sounds["white"][index].play();
            }
    
        })
    
        key.addEventListener("mouseup", function(e){
            key.classList.remove("active");
        })
    }

})


const upperKeys = document.querySelectorAll(".upper-key");

let left = [1.5, 24.5, 35.8, 47.3, 70.1, 82.1];
let i = 0;

upperKeys.forEach((key, index)=>{
    key.style.left = `${left[i]}%`;
    i++;
    key.addEventListener("mousedown", function(e){
        key.classList.add("active");
        let sound = sounds.black[index];
        if(sound){
            sound.currentTime = 0;
            sound.play();
        }
    })

    key.addEventListener("mouseup", function(e){
        key.classList.remove("active");
    })
})




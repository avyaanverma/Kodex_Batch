const like = document.querySelector("#song-image i");

let isLiked = false;
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


const playBar = document.getElementById("completed");

let start = 0;

setInterval(()=>{
    if(start >=100){
        start = 0;
    }
    playBar.style.width = `${start}%`
    start++;
}, 500)
const keys = document.querySelectorAll(".key");

keys.forEach((key)=>{
    key.addEventListener("mousedown", function(e){
        key.classList.add("active")
    })

    key.addEventListener("mouseup", function(e){
        key.classList.remove("active");
    })
})


const upperKeys = document.querySelectorAll(".upper-key");

let left = [1.5, 24.5, 35.8, 47.3, 70.1, 82.1];
let i = 0;
upperKeys.forEach((key)=>{
    key.style.left = `${left[i]}%`;
    i++;
    key.addEventListener("mousedown", function(e){
        key.classList.add("active")
    })

    key.addEventListener("mouseup", function(e){
        key.classList.remove("active");
    })
})

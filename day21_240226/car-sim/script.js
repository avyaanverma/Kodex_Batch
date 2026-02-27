const wheels = document.querySelectorAll(".wheel");

let rotation = 0;
wheels.forEach((wheel)=>{
    wheel.addEventListener("wheel", (e)=>{
        if(e.deltaY > 0){
            rotation += 20;
        }else{
            rotation -=20;
        }
        wheel.style.transform = `rotate(${rotation}deg)`
    })



})


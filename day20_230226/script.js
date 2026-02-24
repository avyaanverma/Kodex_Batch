// now let's understand sth known as events
// a bit advanced

const todo = document.querySelector("#todo");
const done = document.querySelector("#done");
const cards = document.querySelectorAll(".task")

let dragged = null;
let offsetX = 0;
let offsetY= 0;

done.style.height = todo.clientHeight+"px";


cards.forEach((card)=>{
    
    
    card.addEventListener("pointerdown", (e)=>{
        // store dragged element
        dragged = card;
        console.log(card.getBoundingClientRect());
        const rect = card.getBoundingClientRect();

        // store mouse offset 
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        card.style.left = rect.left + "px";
        card.style.top = rect.top + "px";

        // setPointerCapture(e.pointerId)
        card.setPointerCapture(e.pointerId);
        // position:absolute
        // z-index:1000
        done.appendChild(card);
        card.style.position = "absolute";
        card.style.zIndex = "1000";
    });
    // card.addEventListener("pointerup");
})

document.addEventListener("pointermove", (e)=>{
    if(!dragged) return;

    dragged.style.left = e.clientX - offsetX + "px";
    dragged.style.top = e.clientY - offsetY + "px";
})

document.addEventListener("pointerup", (e)=>{
    if(!dragged) return

    dragged.style.zIndex = "1";
    dragged = null;
})
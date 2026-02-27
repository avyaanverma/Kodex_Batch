const canvas = document.querySelector("#board");

const ctx = canvas.getContext("2d");

canvas.width = 2000;
canvas.height =  2000;

// a var to tell if drawing is happening
let drawing = false;



canvas.addEventListener("pointerdown", (e)=>{
  drawing = true;
})


canvas.addEventListener("pointerup", ()=>{
  drawing = false;
})


canvas.addEventListener("pointermove", (e)=>{
  if(!drawing) return;
  
  const rect = canvas.getBoundingClientRect();
  
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  ctx.fillStyle = "black";
  
  ctx.fillRect(x,y,2,2);
})
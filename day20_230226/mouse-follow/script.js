const cursor = document.querySelector("#cursor");
const body = document.body;
document.addEventListener("mousemove", function(e){
    cursor.style.left = e.pageX - 50 +"px";
    cursor.style.top= e.pageY- 50 +"px";
})

const images = [
    "https://upload.wikimedia.org/wikipedia/commons/5/59/Cliff_House_from_Ocean_Beach.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNTtrIawKezVeb4yfUO8aViJgMzZfFYEhXA&s",
    "https://static.vecteezy.com/system/resources/thumbnails/071/379/357/small/a-stunning-sunset-creates-a-dramatic-orange-and-red-sky-over-the-calm-ocean-and-beach-photo.jpg",
    "https://media.istockphoto.com/id/184857129/photo/view-above-the-clouds.jpg?s=612x612&w=0&k=20&c=4Mw19T7DGszhHknA1j8s4ncXqhheIq21rkPy74BMEQI=",
    "https://addons-media.operacdn.com/media/CACHE/images/themes/46/230646/1.0-rev1/images/580e87bd44e2a6a8a82e2376ff7a3e09/93132f1bede3e6dd8ea504ac8468008d.jpg",
]

let i = 0;

setInterval(()=>{
    if(i == images.length) i = 0;
    body.style.backgroundImage = `url(${images[i]})`;
    i++;
}, 3000)
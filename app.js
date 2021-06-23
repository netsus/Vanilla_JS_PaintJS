const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")

canvas.width = 750;
canvas.height = 750;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 1;


let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
}

// function onMouseUp(event){
//     stopPainting();
// }

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
} 

console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
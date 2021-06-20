const canvas = document.getElementById("jsCanvas");


let painting = false;

function stopPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x,y);
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mousedown", onMouseUp)
    canvas.addEventListener("mousedown", stopPainting)
} 
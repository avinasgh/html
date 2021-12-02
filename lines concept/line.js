function canvas(){
    var canvas=document.getElementById("mycanvas");
    var context=canvas.getContext("2d");
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(500,50);
    context.closePath();
    context.stroke()
    // context.font="50pt Algerian"
    // context.fillStyle="red";
    // context.fillText("AVINASH",30,200)
}
window.addEventListener("load",canvas,false);
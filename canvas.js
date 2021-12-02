function canvas(){
    var canvas=document.getElementById("mycanvas");
    var context=canvas.getContext("2d");
    var display=context.createLinearGradient(0,0,200,0);
    display.addColorStop(0,"red");
    display.addColorStop(0.25,"green");
    display.addColorStop(0.5,"yellow");
    display.addColorStop(0.75,"violet");
    display.addColorStop(1,"blue");
    context.fillStyle=display;
    // context.fillRect(10,10,200,100)
    // context.clearRect(20,20,180,80);
    context.font="50pt Algerian";
    // context.fillStyle="red";
    
    context.fillText("AVINASH",30,200);
}
window.addEventListener("load",canvas,false);
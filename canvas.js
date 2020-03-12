var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
c.fillStyle = "rba(255,22,22,0.1)";
c.fillRect(100,100,100,100);
console.log("hii");


c.beginpath();
c.moveTo(50,500);
c.lineTo(100,500);
c.lineTo(600,450);
c.strokestyle = "#ffaa00";
c.stroke();


//kreis
c.beginPath();
c.ark(30,30,400,0,2*PI,false);
c.stroke();



function animate()
{
  requestAnimationFrame(animate);
  console.log("ich male");
}


animate();

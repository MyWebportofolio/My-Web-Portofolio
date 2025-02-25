var catEl = document.getElementById("cat");
  
var startTime = new Date().getTime();
var walkTheCat = function() {
    var currTime = new Date().getTime();
    var secondsElapsed = ((currTime - startTime)/1000);
    var newLeft = 20+((currTime - startTime)/1000);
    var newLeft=100+secondsElapsed*20;
    catEl.style.left=newLeft+"px";
    if (newLeft<350) {
    window.requestAnimationFrame(walkTheCat);} 
    };
walkTheCat();


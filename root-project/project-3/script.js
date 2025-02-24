var catPic = document.getElementById("cat-pic");
var onCatClick = function(e) {
    var stashePic = document.getElementById("mustache-pic");  
    stashePic.style.top = e.clientY+"px";
    stashePic.style.left = e.clientX+"px";
};
catPic.addEventListener("click", onCatClick);


let myPic = document.getElementById("myPic");

myPic.addEventListener("mouseenter", function(){
  myPic.src = "resources/pics/me_working_vivid.JPG";
});

myPic.addEventListener("mouseout", function(){
  myPic.src = "resources/pics/me_working.JPG";
});
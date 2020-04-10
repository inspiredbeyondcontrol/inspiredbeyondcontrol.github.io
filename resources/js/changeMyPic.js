let myPic = document.getElementById("myPic");

myPic.addEventListener("mouseenter", function(){
  myPic.src = "resources/pics/me_working_vivid.jpeg";
});

myPic.addEventListener("mouseout", function(){
  myPic.src = "resources/pics/me_working.jpeg";
});
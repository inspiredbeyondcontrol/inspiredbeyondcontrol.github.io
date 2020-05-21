// INDEX: switch picture from b&w to color and back

let myPic = document.getElementById("myPic");

myPic.addEventListener("mouseenter", function(){
  myPic.src = "resources/pics/me_working_vivid.jpeg";
});

myPic.addEventListener("mouseout", function(){
  myPic.src = "resources/pics/me_working.jpeg";
});

// CONTACT:  switch picture from b&w to color and back

let myContactPic = document.getElementById("myContactPic");

myContactPic.addEventListener("mouseenter", function(){
  myContactPic.src = "../resources/pics/me_working_vivid.jpeg";
});

myContactPic.addEventListener("mouseout", function(){
  myContactPic.src = "../resources/pics/me_working.jpeg";
});

// INDEX: change words in start journey button

let startJourney = document.getElementById("start-button");

startJourney.addEventListener("mouseenter", function(){
  startJourney.innerText = "Hit the Gas!";
});

startJourney.addEventListener("mouseout", function(){
  startJourney.innerText = "Start Journey!";
});

// HUNGER, TASTYBLOGS: dropdown menu

function show() {
    var nav_icon = document.getElementById("nav-icon");
    var cross_icon = document.getElementById("cross-icon");
    var click = document.getElementById("dropdown-list");
    
    if(nav_icon.style.display === "block") {
         nav_icon.style.display = "none";
         }
         else {
           nav_icon.style.display = "block";
     }
    
    if(cross_icon.style.display === "none") {
         cross_icon.style.display = "block";
         }
         else {
           cross_icon.style.display = "none";
     }
    
    if(click.style.display === "none") {
         click.style.display = "block";
         }
         else {
           click.style.display = "none";
     }
}

function hide() {
    var nav_icon = document.getElementById("nav-icon");
    var cross_icon = document.getElementById("cross-icon");
    var click = document.getElementById("dropdown-list");
    
    if(nav_icon.style.display === "none") {
         nav_icon.style.display = "block";
         }
         else {
           nav_icon.style.display = "none";
     }
    
    if(cross_icon.style.display === "block") {
         cross_icon.style.display = "none";
         }
         else {
           cross_icon.style.display = "block";
     }
    
    if(click.style.display === "block") {
         click.style.display = "none";
         }
         else {
           click.style.display = "block";
     }
}

// HUNGER: Alert box for Logo

function logoAlert() {
    alert("I created this logo!");
}

  
var countDownDate = new Date("December 4, 2024 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 


document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#E6E6E6";
        } else if(window.scrollY <50) {
            navbar.style.backgroundColor = "#FFFFFF";
        }
    });
});
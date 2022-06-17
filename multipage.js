
let countDownDate = new Date("July 23, 2022 23:59:59").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days_left").innerHTML = days ;
  document.getElementById("hours_left").innerHTML = hours ;
  document.getElementById("min_left").innerHTML = minutes ;
  document.getElementById("sec_left").innerHTML = seconds ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

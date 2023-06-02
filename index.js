function playtom1() {
  var audio = document.getElementById("tom1");
  audio.play();
}

function playtom2() {
  var audio = document.getElementById("tom2");
  audio.play();
}

function playtom3() {
  var audio = document.getElementById("tom3");
  audio.play();
}

function playtom4() {
  var audio = document.getElementById("tom4");
  audio.play();
}

function playcrash() {
  var audio = document.getElementById("crash");
  audio.play();
}

function playhithat() {
  var audio = document.getElementById("hithat");
  audio.play();
}

function playbombo() {
  var audio = document.getElementById("bombo");
  audio.play();
}

function playredoblante() {
  var audio = document.getElementById("redoblante");
  audio.play();
}

/* cuando hago CLICK en .button, .nav la añado o le quito= TOOGLE 'activo'*/

const button = document.getElementById("my-button");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});


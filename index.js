/* cuando hago CLICK en .button, .nav la añado o le quito= TOOGLE 'activo'*/

const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
} )

function play(id) {
  var audio = document.getElementById(id);
 if (audio) { // transición de sonidos más "real"
    audio.currentTime = 0;
    audio.play(); 
  }
}

document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'a': //  tom1
      play('tom1');
      break;
    case 's': // tom2
      play('tom2');
      break;
    case 'd': // tom3
      play('tom3');
      break;
    case 'f': // tom4
      play('tom4');
      break;
    case 'g': // crash
      play('crash');
      break;
    case 'h': // hit-hat
      play('hithat');
      break;
    case 'j': // bombo
      play('bombo');
      break;
    case 'k': // redoblante
      play('redoblante');
      break;
    default:
      break;
  }
});



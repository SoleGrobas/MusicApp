function play(id) {
  let audio = document.getElementById(id);
 if (audio) {   // transición de sonidos más "real"
    audio.currentTime = 0;
    audio.play(); 
  }
}
document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'a': //  tom1
      play('tom1'); animation('tom1Area');
      break;
    case 's': // tom2
      play('tom2'); animation('tom2Area');
      break;
    case 'd': // tom3
      play('tom3'); animation('tom3Area');
      break;
    case 'f': // tom4
      play('tom4'); animation('tom4Area');
      break;
    case 'g': // crash
      play('crash'); animation('crashArea');
      break;
    case 'h': // hit-hat
      play('hithat'); animation('hithatArea');
      break;
    case 'j': // bombo
      play('bombo'); animation('bomboArea');
      break;
    case 'k': // redoblante
      play('redoblante'); animation('redoblanteArea');
      break;
    default:
      break;
  }
});

function animation(areaId) {
  let areaAnimation = document.getElementById(areaId); //selecciono elemento
  areaAnimation.classList.add('animation');

  
  setTimeout(function() {
    areaAnimation.classList.remove('animation'); // quitar clase animation tras 1 seg
    }, 250);
}
//PIANO

function play(id) {
  let audio = document.getElementById(id);
 if (audio) {   // transición de sonidos más "real"
    audio.currentTime = 0;
    audio.play(); 
  }
}
document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'z': // piano1
      play('piano1'); animationPiano('piano1Area');
      break;
    case 'x': // piano2
      play('piano2'); animationPiano('piano2Area');
      break;
    case 'c': // piano3
      play('piano3'); animationPiano('piano3Area');
      break;
    case 'v': // piano4
      play('piano4'); animationPiano('piano4Area');
      break;
    case 'b': // piano5
      play('piano5'); animationPiano('piano5Area');
      break;
    case 'm': // piano6
      play('piano6'); animationPiano('piano6Area');
      break;
    case 'n': // piano7
      play('piano7'); animationPiano('piano7Area');
      break;
    default:
      break;
  }
});

function animationPiano(areaId) {
  let areaAnimationPiano = document.getElementById(areaId); //selecciono elemento
  areaAnimationPiano.classList.add('animation-piano');

  
  setTimeout(function() {
    areaAnimationPiano.classList.remove('animation-piano'); // quitar clase animation tras 1 seg
    }, 300);
}
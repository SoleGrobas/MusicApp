function play(id) {
  let audio = document.getElementById(id);
 if (audio) {   
    audio.currentTime = 0;
    audio.play(); 
  }
}

function animation(areaId) {
  let areaAnimation = document.getElementById(areaId);

  areaAnimation.classList.add('animate__headShake');

  setTimeout(function() {
    
    areaAnimation.classList.remove('animate__headShake');
  }, 250);
}

document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'a': 
      play('tom1'); animation('tom1Area');
      break;
    case 's': 
      play('tom2'); animation('tom2Area');
      break;
    case 'd': 
      play('tom3'); animation('tom3Area');
      break;
    case 'f': 
      play('tom4'); animation('tom4Area');
      break;
    case 'g':
      play('crash'); animation('crashArea');
      break;
    case 'h':
      play('hithat'); animation('hithatArea');
      break;
    case 'j': 
      play('bombo'); animation('bomboArea');
      break;
    case 'k': 
      play('redoblante'); animation('redoblanteArea');
      break; 
    default:
      break;
  }
})

//PIANO

function play(id) {
  let audio = document.getElementById(id);
 if (audio) {   
    audio.currentTime = 0;
    audio.play(); 
  }
}

function animationPiano(areaId) {
  let areaAnimationPiano = document.getElementById(areaId); 
  areaAnimationPiano.classList.add('animation-piano');

  
  setTimeout(function() {
    areaAnimationPiano.classList.remove('animation-piano'); 
    }, 300);
}

document.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'z': 
      play('piano1'); animationPiano('piano1Area');
      break;
    case 'x': 
      play('piano2'); animationPiano('piano2Area');
      break;
    case 'c': 
      play('piano3'); animationPiano('piano3Area');
      break;
    case 'v': 
      play('piano4'); animationPiano('piano4Area');
      break;
    case 'b': 
      play('piano5'); animationPiano('piano5Area');
      break;
    case 'n': 
      play('piano6'); animationPiano('piano6Area');
      break;
    case 'm': 
      play('piano7'); animationPiano('piano7Area');
      break;
    default:
      break;
  }
});



const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav");

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-menu_show');
});



function myFunction() {
  alert("If your using a mobile phone, for a best experience, rotate your mobile phone");
}



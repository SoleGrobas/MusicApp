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
  let areaAnimation = document.getElementById(areaId); //selecciono el elemento
  areaAnimation.classList.add('animation'); //
}
/*FUNCIONA
function animation(areaId) {
  let areaAnimation = document.getElementById(areaId);
  areaAnimation.style.fill = 'white';
}
*/
/*
function animation(areaId) {
  var areaAnimation = document.getElementById(areaId);
  areaAnimation.style.fill = '#FF00FF';
  areaAnimation.animation(); 
}
*/
/*
function animation(areaId) {
  let areaAnimation = document.getElementById(areaId).backgroundColor = '#FF00FF';
  //areaId.style.backgroundColor = '#FF00FF';
  areaAnimation.animation();
}
*/
/*
function animation(areaId) {
  var areaAnimation = document.getElementById(areaId).style.borderRadius = '#FF00FF';
  //areaId.style.display = 'none';
  areaAnimation.animation(areaId);
  }
*/
/*
function play(soundId, areaId) {
  var audio = document.getElementById(soundId);
  var area = document.getElementById(areaId).style.borderRadius = '#FF00FF';
  area.play();
}
*/
/*
cuando hago CLICK en .button, .nav la añado o le quito= TOOGLE 'activo'
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
} )
*/

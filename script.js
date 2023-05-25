//function playSound() {
  //  var audio = document.getElementById("myAudio");
   // audio.play();
 // }

 function playSound(soundSrc) {
  var sound = document.getElementById("myAudio");
  
  // Cargar el sonido
  sound.src = soundSrc;
  sound.load();

  // Reproducir el sonido
  sound.play();
}
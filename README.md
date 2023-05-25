# MusicApp
Proyecto 3- Music App

Prueba sobre mapeo


Prueba 2, funciona solo una zona del mapeo.

<audio id="sound"></audio>

    <div id="tom1">
        <audio id="myAudio">
          <source src="/sounds/tom1.wav" type="audio/wav">
        </audio>
      
        <img src="/images/Imagen de la batería.png" usemap="#myMap">
      
        <map name="myMap">
          <area shape="circle" coords="266,149,76" onclick="playSound()">
        </map>

    </div>
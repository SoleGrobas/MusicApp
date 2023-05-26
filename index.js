

/* cuando hago CLICK en .button, .nav la añado o le quito= TOOGLE 'activo'*/

const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
} )

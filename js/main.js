// import Typed from 'typed.js'

const navBtn = document.getElementById('nav-btn')
const navMenu = document.getElementById('nav-menu')
const body = document.querySelector('body')
let classNavMenu = navMenu.className

console.log(classNavMenu)

navBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  navMenu.classList.toggle('active')
}

// var typingEffect = new Typed('.type-effect-text', {
//   strings: ['tutores', 'alunos', 'Aprova +'],
//   loop: true,
//   typeSpeed: 100,
//   backSpeed: 80,
//   backDelay: 1500
// })

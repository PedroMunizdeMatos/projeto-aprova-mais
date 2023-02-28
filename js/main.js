const navBtn = document.getElementById('nav-btn')
const navMenu = document.getElementById('nav-menu')
const body = document.querySelector('body')
let classNavMenu = navMenu.className

console.log(classNavMenu)

navBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  navMenu.classList.toggle('active')
}

const menuBurguer = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuBurguer.addEventListener('click', animarMenu)

function animarMenu(){
    menuBurguer.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}
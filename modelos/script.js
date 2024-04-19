var menu = document.querySelector('#teste')
var menuCover = document.querySelector('.menu-cover');

function abrirMenu() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
        menuCover.style.display = 'block'
    } else {
        menu.style.display = 'none'
        menuCover.style.display = 'none'
    }
}
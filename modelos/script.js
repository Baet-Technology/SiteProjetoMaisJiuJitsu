function abrirMenu() {
    var menu = document.querySelector('#teste')
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
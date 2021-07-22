// Desktop Nav Menu Dropdown

var nav_dropdown = document.getElementsByClassName('nav-dropdown');
var dropdowns = document.getElementsByClassName('dropdown');

function toggleDropdown() {
    this.children[1].classList.toggle('condensed')
}

for (i = 0; i < nav_dropdown.length; i++) {
    nav_dropdown[i].addEventListener('mouseenter', toggleDropdown);
    nav_dropdown[i].addEventListener('mouseleave', toggleDropdown);
}
var nav_dropdown_mobile = document.getElementsByClassName('nav-dropdown-mobile');
var dropdowns = document.getElementsByClassName('dropdown-mobile');

function toggleDropdown() {
    this.children[1].classList.toggle('condensed-mobile')
}

for (i = 0; i < nav_dropdown.length; i++) {
    nav_dropdown_mobile[i].addEventListener('click', toggleDropdown);
}
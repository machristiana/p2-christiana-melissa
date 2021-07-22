//Hamburger Menu - Activate
// https://www.jqueryscript.net/menu/Mobile-Hamburger-Menu.html

$(".menu").click(function() {
    $(".menu").toggleClass("active");

    $(".navbar-menu").toggleClass("active");
});
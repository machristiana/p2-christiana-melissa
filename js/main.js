//Change photo based on window size
var responsive_photo = document.getElementById("responsive");

function swapPhoto() {
    if (window.innerWidth > 600) {
        responsive_photo.src = "images/about1.jpeg";
    } else {
        responsive_photo.src = "images/about3.jpg";
    }
}

swapPhoto();


//This makes the swap happen if the user manually resizes the browser after load
window.addEventListener("resize", swapPhoto, false);
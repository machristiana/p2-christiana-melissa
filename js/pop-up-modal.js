var modal = document.querySelector(".modal-pop-up")
var closeBtn = document.querySelector(".close-btn")

setTimeout(function() {
    modal.style.display = "block"
}, 2000);

closeBtn.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}
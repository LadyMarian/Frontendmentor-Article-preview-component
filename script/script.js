
const shareButton = document.getElementById("shareButton");
const modalBackground = document.getElementById("modal__background");
const modal = document.getElementById("modal");
const modalShareButton = document.getElementById("modal__share");
const all = document.getElementsByTagName("body");

shareButton.addEventListener("click", function() {
    modalBackground.classList.add("show");
    modal.classList.add("show");
});

modalBackground.addEventListener("click", function() {
    closeModal();
})

modalShareButton.addEventListener("click", function() {
    closeModal();
})

const closeModal = function() {
    modalBackground.classList.remove("show");
    modal.classList.remove("show");
}
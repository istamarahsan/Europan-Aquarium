document.addEventListener("DOMContentLoaded", after_load, false)

function after_load() {
    const modal = document.getElementById("signup-modal");
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function open_signup_modal() {
    const modal = document.getElementById("signup-modal");
    modal.style.display = "block";
}

function close_signup_modal() {
    const modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}
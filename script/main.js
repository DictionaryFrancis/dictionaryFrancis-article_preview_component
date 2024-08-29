// When the user clicks on div, open the popup
function sharePopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
    console.log('Popup visibility toggled');
}

console.log('JavaScript loaded');
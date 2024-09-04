let popupMobile = document.getElementById("myPopup-mobile");
let popup = document.getElementById("popup");
// When the user clicks on div, open the popup
function sharePopup() {
    popup.classList.toggle("show");
    popupMobile.classList.toggle("footer-show");
    console.log('Popup visibility toggled');
}

console.log('JavaScript loaded');

function sharePopupMobile() {
    popupMobile.classList.toggle("footer-show");
    console.log('Popup visibility toggled');
}

console.log('JavaScript loaded');
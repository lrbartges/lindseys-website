const buttonContainer = document.getElementById("button-container");
const button = document.createElement("button");
const showPopupButton = document.getElementById("show-popup");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopupButton = document.getElementById("close-popup");
button.textContent = "Want to hear a joke?";
button.classList.add("hoverable");

button.addEventListener("mouseenter", function() {
    button.textContent = "Why don't programmers like nature?";
});

button.addEventListener("mouseleave", function() {
    button.textContent = "Want to hear a joke?";
});

button.addEventListener("click", function() {
    alert("Because it has too many bugs!");
});

buttonContainer.appendChild(button);

// Select necessary elements


// Event listener to show the popup
showPopupButton.addEventListener("click", function() {
    // Change the content of the popup
    popupContent.innerHTML = `
        <h2>New Popup Content</h2>
        <p>This is the updated content of the popup.</p>
    `;
    
    // Show the popup
    popup.style.display = "block";
});

// Event listener to close the popup
closePopupButton.addEventListener("click", function() {
    // Hide the popup
    popup.style.display = "none";
});

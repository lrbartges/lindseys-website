const buttonContainer = document.getElementById("button-container");
const button = document.createElement("button");
button.textContent = "Want to hear a joke?";

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

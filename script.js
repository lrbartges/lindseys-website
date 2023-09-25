const buttonContainer = document.getElementById("button-container");
const button = document.createElement("button");
button.textContent = "Want to hear a joke?";
button:hover.textContent ="Why dont programmers like nature?"
button.addEventListener("click", function(){
    alert("Because it has too many bugs!");
});
buttonContainer.appendChild(button);

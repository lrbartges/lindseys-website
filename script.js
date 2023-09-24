const h2 = document.createElement("h2");
h2.textContent = "Who is Lindsey, and what is this website?!";
document.querySelector("body").appendChild(h2);
const buttonContainer = document.getElementById("button-container");
const button = document.createElement("button");
button.textContent = "Click Here";
button.addEventListener("click", function(){
    alert("You clicked a button! That's awesome!");
});
buttonContainer.appendChild(button);

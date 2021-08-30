const numGeneratorInput = document.querySelector("#num-generator__form input");
const numGuessInput = document.querySelector("#num-guess__form input");
const numGuessButton = document.querySelector("#num-guess__form button");

const result = document.querySelector("#result");

function setNumRange(event) {
  event.preventDefault();
}

numGuessInput.addEventListener("click", setNumRange);

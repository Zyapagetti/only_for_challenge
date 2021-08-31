const numGeneratorInput = document.querySelector("num-generator__input");
const numGuessInput = document.querySelector("#num-guess__input");
const numGuessButton = document.querySelector("#num-guess__form button");

const result = document.querySelector("#result");

function setNumRange(event) {
  event.preventDefault();
  const machineNum = parseInt(numGeneratorInput.value);
  const myNum = parseInt(numGuessInput.value);
  const randNum = Math.ceil(Math.random() * machineNum);
  result.innerText = `You chose ${myNum} . / The machine chose ${machieNum} .`;
  console.log(randNum);
  console.log(myNum);
}

numGuessInput.addEventListener("submit", setNumRange);

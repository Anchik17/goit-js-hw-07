function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  const resultArr = [];

  for(let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const myBox = document.createElement("div");
    myBox.style.width = `${size}px`;
    myBox.style.height = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    resultArr.push(myBox);
  }
  boxesContainer.append(...resultArr);
}

createBtn.addEventListener("click", handleClick);

function handleClick() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}



 
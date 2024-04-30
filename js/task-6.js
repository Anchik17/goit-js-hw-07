function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  sizes = 30;
})

let sizes = 30;

function createMarkup() {
  if(input.value < 1 || input.value > 100) {
    console.log("error");
    return;
  }

  createBoxes(input.value);
}

function createBoxes(amount) {
  input.value = "";
  boxesContainer.innerHTML = "";
  sizes = 30;

  for(let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(myBox);

    sizes += 10;
  }
}


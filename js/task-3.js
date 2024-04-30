const refs = {
nameInput: document.querySelector('#name-input'),
nameOutput: document.querySelector('#name-output'),
}
console.log(refs);
refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.target.value.trim() === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else {
    refs.nameOutput.textContent = event.currentTarget.value.trim();
  }
  console.log(refs);
}
const inputRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (inputRef.value.length > 0) {
    outputNameRef.textContent = event.target.value;
  } else {
    outputNameRef.textContent = "незнакомец";
  }
});

const counterValue = document.querySelector("#value");
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
let valueRef = 0;

const changeValue = () => {
  counterValue.textContent = valueRef;
};

decrementRef.addEventListener("click", () => {
  decrement();
  changeValue();
});
incrementRef.addEventListener("click", () => {
  increment();
  changeValue();
});

const decrement = () => {
  valueRef -= 1;
};
const increment = () => {
  valueRef += 1;
};


const drinkSelect = document.getElementById("drink-select");

drinkSelect.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false,
);

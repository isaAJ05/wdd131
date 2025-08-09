const allowDrinksCheckbox = document.getElementById("allow-drinks");
const drinkSelect = document.getElementById("product-select");

allowDrinksCheckbox.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false,
);


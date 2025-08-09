const productSelect = document.getElementById("product-select");

allowDrinksCheckbox.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false,
);


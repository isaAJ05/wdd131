const productSelect = document.getElementById("product-select");

productSelect.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false,
);


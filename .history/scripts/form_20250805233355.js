const productSelect = document.getElementById("product-select");

productSelect.addEventListener(
  "click",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false,
);


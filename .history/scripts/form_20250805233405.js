const productSelect = document.getElementById("product-select");

productSelect.addEventListener(
  "click",
  (event) => {
    productSelect.disabled = !event.target.checked;
  },
  false,
);


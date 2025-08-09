const productSelect = document.getElementById("product-select");
const productSelect = document.getElementById("number-one");

productSelect.addEventListener(
  "click",
  (event) => {
    productSelect.disabled = !event.target.checked;
  },
  false,
);


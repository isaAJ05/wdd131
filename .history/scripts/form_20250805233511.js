const productSelect = document.getElementById("product-select");
const not = document.getElementById("number-one");

productSelect.addEventListener(
  "click",
  (event) => {
    productSelect.disabled = !event.target.checked;
  },
  false,
);


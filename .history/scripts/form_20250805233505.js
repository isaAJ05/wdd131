const productSelect = document.getElementById("product-select");
const no = document.getElementById("number-one");

productSelect.addEventListener(
  "click",
  (event) => {
    productSelect.disabled = !event.target.checked;
  },
  false,
);


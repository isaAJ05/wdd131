const year = document.querySelector("#currentyear");
const
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

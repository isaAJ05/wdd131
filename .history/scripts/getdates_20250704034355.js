const year = document.querySelector("#currentyear");
let oLastModif = new Date(document.lastModified);
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

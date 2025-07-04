const year = document.querySelector("#currentyear");
let oLastModif = new Date(document.lastModified);
oLastModif.innerHTML = `<span class="highlight">${oLastModif}</span>`;
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

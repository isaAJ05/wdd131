const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const lastMod = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
lastMod.innerHTML = `last modified: <span class="highlight">${oLastModif}</span>`;

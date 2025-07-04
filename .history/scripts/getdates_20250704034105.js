const year = document.querySelector("#currentyear");
const lastModified = 
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('.title');
const templeSection = document.querySelector('#temple-cards');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    title.classList.toggle('open');
});
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24-26",
        area: 53500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 1-2",
        area: 45000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
    }
];

function display(temples) {
    temples.forEach((temple) => {
        const section = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy"; 
        image.className  = "hover";

        section.appendChild(name);
        section.appendChild(location);
        section.appendChild(dedication);
        section.appendChild(area);
        section.appendChild(image);

        templeSection.appendChild(section);
    });
}
display(temples);
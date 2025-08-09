const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('.title');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    title.classList.toggle('open');
});
const cardsData = [
    {
        title: "Spiritual Growth",
        text: "Discover practices to strengthen your inner peace and connection.",
        link: "spiritual.html"
    },
    {
        title: "Social Skills",
        text: "Learn how to connect, communicate, and build strong relationships.",
        link: "social.html"
    },
    {
        title: "Intellectual Growth",
        text: "Boost your mind with tips, knowledge, and creative thinking.",
        link: "intellectual.html"
    },
    {
        title: "Physical Wellness",
        text: "Stay active and healthy with routines and self-care habits.",
        link: "physical.html"
    }
];

let currentIndex = 0;

const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const cardLink = document.getElementById("card-link");

function updateCard() {
    cardTitle.textContent = cardsData[currentIndex].title;
    cardText.textContent = cardsData[currentIndex].text;
    cardLink.href = cardsData[currentIndex].link;
}

document.querySelector(".arrow.right").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cardsData.length; // Avanza y vuelve al inicio
  updateCard();
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length; // Retrocede y vuelve al final
  updateCard();
});

// Inicializar con la primera card
updateCard();

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
    currentIndex = (currentIndex + 1) % cardsData.length; 
    updateCard();
});

document.querySelector(".arrow.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length; 
    updateCard();
});

updateCard();

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Do something today that your future self will thank you for.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Push yourself, because no one else is going to do it for you."
];

function getQuoteOfTheDay() {
    const today = new Date().toDateString(); 
    const savedDate = localStorage.getItem("quoteDate");
    const savedQuote = localStorage.getItem("quoteText");

    if (savedDate === today && savedQuote) {
        return savedQuote; 
    } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomIndex];
        localStorage.setItem("quoteDate", today);
        localStorage.setItem("quoteText", newQuote);
        return newQuote;
    }
}

document.getElementById("quote-text").textContent = getQuoteOfTheDay();

const scriptures = [
    { ref: "3 Nephi 11:10–11", text: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world." },
    { ref: "Moroni 7:45", text: "Charity is the pure love of Christ..." },
    { ref: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me." },
    { ref: "Alma 32:27", text: "Bring forth works; show unto God you have faith." }
];

function getDailyScripture() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("scriptureDate");
    const savedText = localStorage.getItem("scriptureText");
    const savedRef = localStorage.getItem("scriptureRef");

    if (savedDate === today && savedText && savedRef) {
        return { text: savedText, ref: savedRef };
    } else {
        const randomIndex = Math.floor(Math.random() * scriptures.length);
        const newScripture = scriptures[randomIndex];
        localStorage.setItem("scriptureDate", today);
        localStorage.setItem("scriptureText", newScripture.text);
        localStorage.setItem("scriptureRef", newScripture.ref);
        
        return newScripture;
    }
}

let scripture = getDailyScripture();

 
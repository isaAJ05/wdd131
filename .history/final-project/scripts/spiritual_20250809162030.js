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

const scripture = getDailyScripture();
document.getElementById("#scripture-text").textContent = scripture.text;
document.getElementById("#scripture-ref").textContent = scripture.ref;

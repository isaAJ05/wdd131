const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { displayList(chapter) });

function displayList(item) {
    l
} 

button.addEventListener("click", function () {
    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
        
        input.value = '';
        input.focus();
    }
    
});




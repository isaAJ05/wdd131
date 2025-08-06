const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { displayList(chapter) });

displayList

button.addEventListener("click", function () {
    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
            
        });
        input.value = '';
        input.focus();
    }
    
});




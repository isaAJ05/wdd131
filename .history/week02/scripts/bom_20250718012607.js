const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");


if (input.value.trim() != "") { 
    button.AddEventListener("click", function () {
    
        list.append(li);
    input.focus();
    input.value = " ";
});
}
deleteButton.AddEventListener("click", function () {
    list.removeChild(li);
    input.focus();
    input.value = " ";
});
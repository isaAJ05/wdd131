const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.AddEventListener("click", function () {
    if (input.value.trim() != "") { 

    li.append(deleteButton);
    list.append(li);
    input.focus();
});
}
deleteButton.AddEventListener("click", function () {
    list.removeChild(li);
    input.focus();
    input.value = " ";
});
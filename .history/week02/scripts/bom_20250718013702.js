const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";

if (input.value.trim() != "") { 
    button.AddEventListener("click", function () {

    li.append(deleteButton);
    list.append(li);
    input.focus();
});
}
deleteButton.AddEventListener("click", function() {
    list.removeChild(li);
    input.focus();
    input.value = " ";
})
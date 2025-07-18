

if (input.value.trim() != "") { 

    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
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
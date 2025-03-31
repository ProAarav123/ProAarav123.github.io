document.addEventListener("DOMContentLoaded", function() {
    let itemList = document.getElementById("itemList");
    let addItemBtn = document.getElementById("addItem");
    let itemInput = document.getElementById("itemInput");

    // Load stored items
    let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
    updateList();

    addItemBtn.addEventListener("click", function() {
        let itemText = itemInput.value.trim();
        if (itemText !== "") {
            items.push(itemText);
            localStorage.setItem("shoppingList", JSON.stringify(items));
            itemInput.value = "";
            updateList();
        }
    });

    function updateList() {
        itemList.innerHTML = "";
        items.forEach((item, index) => {
            let listItem = document.createElement("div");
            listItem.classList.add("list-item");
            listItem.innerHTML = `<span>${index + 1}. ${item}</span> 
                                  <button class="remove-btn" onclick="removeItem(${index})">❌</button>`;
            itemList.appendChild(listItem);
        });
    }

    window.removeItem = function(index) {
        items.splice(index, 1);
        localStorage.setItem("shoppingList", JSON.stringify(items));
        updateList();
    };
});

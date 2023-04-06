import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-253fa-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const addButtonEl = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")
const shoppingListEl = document.getElementById("shopping-list")

onValue(shoppingListInDB, function(snapshot) {
    let shoppingListArray = Object.entries(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < shoppingListArray.length; i++) {
        let currentItem = shoppingListArray[i]

        let currentItemId = currentItem[0]
        let currentItemValue = currentItem[1]

        addItemToShoppingListEl(currentItem)
    }
    
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputEl.value = ""
}

function addItemToShoppingListEl(item) {
    let itemId = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    shoppingListEl.append(newEl)
}

addButtonEl.addEventListener("click", () => {
    let inputValue = inputEl.value
    push(shoppingListInDB, inputValue)

    clearInputFieldEl()

})
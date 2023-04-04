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
    let shoppingListArray = Object.values(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < shoppingListArray.length; i++) {
        let currentItem = shoppingListArray[i]
        addItemToShoppingListEl(currentItem)
    }
    
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputEl.value = ""
}

function addItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}

addButtonEl.addEventListener("click", () => {
    let inputValue = inputEl.value
    push(shoppingListInDB, inputValue)

    clearInputFieldEl()

})
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-253fa-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const addButtonEl = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", () => {
    let inputValue = inputEl.value
    
    push(shoppingListInDB, inputValue)

    inputEl.value = ""

    shoppingListEl.innerHTML += `<li>${inputValue}</li>`

})
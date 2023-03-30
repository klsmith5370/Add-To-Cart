const addButtonEl = document.getElementById("add-button")
const inputEl = document.getElementById("input-field")

addButtonEl.addEventListener("click", () => {
    let inputValue = inputEl.value
    console.log(inputValue)
})
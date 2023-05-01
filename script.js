let inputEl = document.getElementById("input")
let greenTextEl = document.getElementById("accent-color")

inputEl.addEventListener("click", ()=> {
    if(inputEl.checked) {
        greenTextEl.classList.add("switch-bottom-text-accent")
    } else if(inputEl.checked === false) {
        greenTextEl.classList.remove("switch-bottom-text-accent")
    }
})



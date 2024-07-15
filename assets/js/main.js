const menuBtn = document.querySelector(".headerCta img")
const overlay = document.querySelector(".overlay")
const menuItem = document.querySelector("header ul")




menuBtn.addEventListener("click", () => {
    overlay.classList.add("active")
    menuItem.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menuItem.classList.remove("active")
})
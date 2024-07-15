const header = document.querySelector("header")

const menuBtn = document.querySelector(".headerCta img")
const overlay = document.querySelector(".overlay")
const menuItem = document.querySelector(".mobileNav")




menuBtn.addEventListener("click", () => {
    overlay.classList.add("active")
    menuItem.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menuItem.classList.remove("active")
})



window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})
const searchIcon = document.getElementById("searchIcon");
const searchModal = document.getElementById("searchModal");
const closeBtn = document.querySelector(".close-btn");
const userIcon = document.getElementById("userIcon");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.querySelector(".close-login");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

searchIcon.addEventListener("click", () => {
    console.log("opening");
    searchModal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    searchModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove("show");
    }
});

userIcon.addEventListener("click", ()=>{
    loginModal.classList.add("show");
})

closeLogin.addEventListener("click", ()=>{
    loginModal.classList.remove("show");
})

window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove("show");
    }
});
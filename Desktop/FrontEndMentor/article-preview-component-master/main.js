let btn = document.querySelector(".bottom button");
let share = document.querySelector(".share");
btn.addEventListener("click", () => {
    share.classList.toggle("active");
    btn.classList.toggle("active");
});
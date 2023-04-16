const bar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const nav = document.querySelector("nav");
bar.addEventListener("click", () => {
    bar.classList.add('d-none')
    close.classList.remove('d-none')
    nav.classList.remove('d-none')
});

close.addEventListener("click", () => {
    close.classList.add('d-none')
    bar.classList.remove('d-none')
    nav.classList.add('d-none')
});
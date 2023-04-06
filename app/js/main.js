function burgerMenu() {
    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector(".nav-menu");
    let overlay = document.querySelector("overlay");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        overlay.classList.toggle('active')
    })

    document.querySelectorAll(".nav-link")
        .forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            overlay.classList.remove('active')
        }))

    document.addEventListener("scroll", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove('active')
    })
}

burgerMenu();

function hoverMenu() {
    let profile = document.getElementById("profile");
    let menu = document.querySelector(".desktop-menu");

    profile.addEventListener("mouseenter", () => {
        menu.classList.toggle("active");
    })

    document.addEventListener("click", () => {
        menu.classList.remove("active");
    })
}

hoverMenu();


const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    mousewhell: true
});

const swipe = document.querySelector('.swiper').swiper;

swipe.slideNext();
let ul = document.querySelector("ul");
let navLink = document.querySelectorAll("ul li");
let loader = document.querySelector(".loader");
//set active class to list of links
for (let i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function() {
        navLink[i].className = "active";
        for (let j = 0; j < navLink.length; j++) {
            if (j !== i) {
                navLink[j].className = "";
            }
        }
    };
}

//landing page anime
let h1 = document.querySelector(".landing h1");
document.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "none";
    anime({
        targets: "ul li",
        translateX: [
            { value: -500, duration: 0 },
            { value: 0, duration: 50 },
        ],
        delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
    });
    //set anime for logo
    anime({
        targets: ".logo img",
        translateY: [
            { value: -100, duration: 0 },
            { value: 0, duration: 1000 },
        ],
        rotate: [
            { value: 0, duration: 0 },
            { value: 360, duration: 1000 },
        ],
        delay: anime.stagger(100, { start: 500 }),
    });
    // set anime for h1
    anime({
        targets: ".landing h1",
        scale: [
            { value: 0, duration: 0 },
            { value: 10, duration: 0 },
            { value: 1, duration: 2000 },
        ],
        delay: anime.stagger(100, { start: 500 }),
    });
    //set fly letters for p
    anime({
        targets: ".landing p",
        translateX: [{
                value: -1000,
                duration: 0,
            },
            {
                value: 0,
                duration: 1000,
            },
        ],
        delay: anime.stagger(100, { start: 500 }),
    });
    //set fall anime for buttons
    anime({
        targets: ".buttons",
        translateY: [{
                value: -2000,
                duration: 0,
            },
            {
                value: 0,
                duration: 1000,
            },
        ],
    });
    anime({
        targets: ".image-holder img",
        translateX: [{
                value: -2000,
                duration: 0,
            },
            {
                value: 0,
                duration: 1000,
            },
        ],
        rotateZ: [{
                value: 360,
                duration: 0,
            },
            {
                value: 0,
                duration: 1000,
            },
        ],
    });
});
// set anime for loader

document.addEventListener("load", () => {});
//
// let toTop = document.querySelector(".top");
// window.onscroll = () => {
// if (window.scrollY > 900) {
//     toTop.style.display = "flex";
// } else {
//     toTop.style.display = "none";
// }
// };
// toTop.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//     });
// });
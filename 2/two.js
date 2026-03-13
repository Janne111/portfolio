window.addEventListener("scroll", function () {
    let background = document.getElementById("s");
    background.style.transform = "rotate(" + window.pageYOffset/-9 + "deg)";
});

const button = document.getElementById("btn");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
button.addEventListener("click", function (changeimg) {
    img1.classList.toggle("hidden");
    img2.classList.toggle("hidden");
    console.log("clicked");
});
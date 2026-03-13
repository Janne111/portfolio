//rotating the background when scrolling//

window.addEventListener("scroll", function () {
    let background = document.getElementById("g");
    background.style.transform = "rotate(" + window.pageYOffset/-6 + "deg)";
    let reflection = document.getElementById("reflection");
    reflection.classList.remove("hidden");
    reflection.style.animation = "fadeIn 1.5s ease-in";
});

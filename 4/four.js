window.addEventListener("scroll", function () {
    let background = document.getElementById("t");
    background.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
});

const link = document.getElementById("video");
link.addEventListener("click", function () {
    window.open("https://https://janne111.github.io/Tasteful-Tea-Tales/", "_blank");
});

window.addEventListener("scroll", function () {
    let background = document.getElementById("w");
    background.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
});
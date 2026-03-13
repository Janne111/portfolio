window.addEventListener("scroll", function () {
    let background = document.getElementById("m");
    background.style.transform = "rotate(" + window.pageYOffset/6.5 + "deg)";
});


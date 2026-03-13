window.addEventListener("scroll", function () {
    let background = document.getElementById("t");
    background.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
});

const link = document.getElementById("video");
link.addEventListener("click", function () {
    window.open("../4_Teashop/index.html", "_blank");
});
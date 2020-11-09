function changeimage(anything) {
    document.querySelector(".image-box img").src = anything;
}

function colorchange(color) {
    const sec = document.querySelector(".circle");
    sec.style.background = color;
}
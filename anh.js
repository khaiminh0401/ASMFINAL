var k = 0;
var hinh = [];
for (var i = 0; i < 5; i++) {
    hinh[i] = new Image();
    hinh[i].src = "./img/qc/qc" + (i + 1) + ".png";
}

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex -= n);
}

function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
    if (n > hinh.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = hinh.length - 1 }
    var t = document.getElementById("hinh");
    t.src = hinh[slideIndex];
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}
auto();
var z = setInterval(auto, 5000);
function auto() {
    let i;
    if (slideIndex > hinh.length - 1) { slideIndex = 0 }
    var t = document.getElementById("hinh");
    t.src = hinh[slideIndex].src;
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
    slideIndex++;
}
function stop() {
    clearInterval(z);
}

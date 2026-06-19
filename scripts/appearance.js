// Carousel
var images = ["assets/images/support1.png", "assets/images/support2.png", "assets/images/support3.png"];
var texts = ["We are the best tech company", "Fast and reliable support", "Your technology partner"];
var subtexts = [
    "We provide top notch support for your home and business",
    "Our technicians are ready to assist you 24/7",
    "Helping you navigate technology stress-free"
];
var currentIndex = 0;

document.getElementById("carousel_next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carousel_image").src = images[currentIndex];
    document.getElementById("carousel_text").textContent = texts[currentIndex];
    document.getElementById("carousel_subtext").textContent = subtexts[currentIndex];
});

document.getElementById("carousel_prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("carousel_image").src = images[currentIndex];
    document.getElementById("carousel_text").textContent = texts[currentIndex];
    document.getElementById("carousel_subtext").textContent = subtexts[currentIndex];
});

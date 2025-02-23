document.addEventListener("DOMContentLoaded", function () {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const nextButton = document.getElementById("nextSlide");
    const prevButton = document.getElementById("prevSlide");

    function showNextSlide() {
        slide1.classList.remove("active"); // Hide first slide
        slide2.classList.add("active");    // Show second slide
    }

    function showPrevSlide() {
        slide2.classList.remove("active"); // Hide second slide
        slide1.classList.add("active");    // Show first slide
    }

    // Change slide when pressing Enter (Next) or Left Arrow (Previous)
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            showNextSlide();
        } else if (event.key === "ArrowLeft") {
            showPrevSlide();
        }
    });
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
         window.location.href = "timeline.html"; // Change this to the actual next page
        }
    });
    

    // Change slide when clicking Next or Previous button
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);
});

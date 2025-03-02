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
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000); // Remove balloon after 10 seconds
}

// Create balloons at intervals
setInterval(createBalloon, 1000);
console.log("✅ script.js is loaded!");

document.addEventListener("DOMContentLoaded", function() {
    let letterText = `My love,
    I pity the people around you.  
    I pity them for they have been witnessing an amazing person in action and don't even realise it.
    I pity them but I envy them even more.
    Why couldn't it be me, why wasn't I around you, why are we so far away.
    Would have given my everything to be there and celebrate this with you, happy birthday my love.

    

`;
    
    let letterElement = document.getElementById("love-letter");
    
    // Check if the element exists
    if (!letterElement) {
        console.error("❌ ERROR: 'love-letter' element not found in HTML.");
        return;
    }

    let index = 0;

    function typeLetter() {
        if (index < letterText.length) {
            // Ensure proper formatting by replacing \n with <br>
            letterElement.innerHTML += letterText.charAt(index) === "\n" ? "<br>" : letterText.charAt(index);
            index++;
            setTimeout(typeLetter, 50);
        }
    }

    typeLetter();
    // Function to create balloons
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Random position
        let startX = Math.random() * window.innerWidth;
        balloon.style.left = `${startX}px`;

        // Random color for balloons
        let colors = ["red", "blue", "green", "yellow", "pink", "purple"];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Add balloon to the container
        const balloonContainer = document.querySelector(".balloon-container");
        if (balloonContainer) {
            balloonContainer.appendChild(balloon);

            // Remove balloon after animation
            setTimeout(() => {
                balloon.remove();
            }, 5000); // Matches the animation duration
        } else {
            console.error("❌ ERROR: 'balloon-container' element not found in HTML.");
        }
    }

    // Generate balloons at intervals
    setInterval(createBalloon, 1000);
});

// Move to next page on Enter key
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        window.location.href = "quiz.html"; // Redirects to the Quiz Page
    }
});

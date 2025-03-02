console.log("✅ script.js is loaded!");

document.addEventListener("DOMContentLoaded", function() {
    let letterText = `My love,
    I pity the people around you.  
    I pity them for they have been witnessing an amazing person in action and don't even realise it.
    I pity them but I envy them even more.
    Why couldn't it be me, why wasn't I around you, why are we so far away.
    Would have given my everything to be there and celebrate this with you, happy birthday beautiful.

    

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
  
});

// Move to next page on Enter key
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        window.location.href = "quiz.html"; // Redirects to the Quiz Page
    }
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

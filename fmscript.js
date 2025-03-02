document.addEventListener("DOMContentLoaded", function () {
    let message = `Once again a Happy Birthday💕\n\nYou are the most beautiful person in my life.  
    Thank you for being my reason to smile every day.\n\nI love you forever! ❤️`;
    
    let messageElement = document.getElementById("final-message");
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index) === "\n" ? "<br>" : message.charAt(index);
            index++;
            setTimeout(typeMessage, 50);
        }
    }

    typeMessage();

    // Create Floating Hearts
    const heartContainer = document.querySelector(".heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 700);
});

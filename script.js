// index.js

// Function to generate random number between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to generate image source from number
function getImageSource(number) {
    return "images/dice" + number + ".png";
}

// Function to update the heading and images
function updatePage() {
    const messageElement = document.getElementById('message');
    const images = document.querySelectorAll('img');

    // Generate random numbers and image sources for the dice
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomImageSource1 = getImageSource(randomNumber1);
    const randomImageSource2 = getImageSource(randomNumber2);

    // Set image sources
    images[0].setAttribute("src", randomImageSource1);
    images[1].setAttribute("src", randomImageSource2);

    // Determine the winner and update the heading
    if (randomNumber1 > randomNumber2) {
        messageElement.textContent = "🏆 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        messageElement.textContent = "🏆 Player 2 Wins!";
    } else {
        messageElement.textContent = "🤝 Draw!";
    }
}

// Check if the page has been loaded before
if (localStorage.getItem('pageLoaded')) {
    // If the page was previously loaded, update the page with dice results
    updatePage();
} else {
    // If this is the first load, display the welcome message
    localStorage.setItem('pageLoaded', 'true');
}

// Ensure to reset local storage for a new game session if desired
// localStorage.removeItem('pageLoaded'); // Uncomment to reset

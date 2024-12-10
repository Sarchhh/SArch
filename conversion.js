// Function to compute conversion based on user choice
const compute = () => {
    const userChoice = parseInt(document.getElementById("choice").value, 10);
    const number = parseFloat(document.getElementById("num").value);
    let converter;

    if (isNaN(number)) {
        document.getElementById("convertLabel").innerHTML = 'Please enter a valid number.';
        document.getElementById("convertedVal").value = '';
        return;
    }

    switch (userChoice) {
        case 1: // Fahrenheit to Celsius
            converter = (number - 32) * (5 / 9);
            break;
        case 2: // Celsius to Fahrenheit
            converter = (number * 9 / 5) + 32;
            break;
        case 3: // Meter to Feet
            converter = number * 3.281;
            break;
        case 4: // Feet to Meters
            converter = number * 0.3048;
            break;
        default:
            document.getElementById("convertLabel").innerHTML = 'Invalid choice selected.';
            document.getElementById("convertedVal").value = '';
            return;
    }

    document.getElementById("convertLabel").innerHTML = `The converted value of ${number} is:`;
    document.getElementById("convertedVal").value = converter.toFixed(3);
};

// Function to set up event listeners
const setupEventListeners = () => {
    // Recompute on keyup for the number input
    document.getElementById("num").addEventListener("keyup", compute);

    // Recompute on button click
    document.getElementById("converbtn").addEventListener("click", compute);
};

// Initialize menu toggle functionality
const initializeMenu = () => {
    const hamburger = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
};

// Main initialization function
document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    initializeMenu();
});

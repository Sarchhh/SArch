// Toggle light/dark mode
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.left = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.borderRadius = '8px';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode styles in home.css
body.dark-mode {
    background-color: #333;
    color: white;
}

body.dark-mode #hero {
    background: linear-gradient(to right, #2c3e50, #34495e);
}

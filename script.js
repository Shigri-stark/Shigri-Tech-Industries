const button = document.getElementById('welcomeBtn');
const message = document.getElementById('welcomeMessage');

button.addEventListener('click', () => {
    message.textContent = "Hello Boss! Welcome to Shigri-Tech-Industries.";
});

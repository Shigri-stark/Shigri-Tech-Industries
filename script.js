const button = document.getElementById('welcomeBtn');
const message = document.getElementById('welcomeMessage');

button.addEventListener('click', () => {
    message.textContent = "Hello Boss! Welcome to Shigri-Tech-Industries. Let's innovate!";
});

const header = document.querySelector('header h1');
let showCursor = true;

setInterval(() => {
    if(showCursor) {
        header.textContent = "Welcome to Shigri-Tech-Industries |";
    } else {
        header.textContent = "Welcome to Shigri-Tech-Industries ";
    }
    showCursor = !showCursor;
}, 500);

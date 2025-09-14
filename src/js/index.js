let timeLeft = 600; // 10 minutes in seconds

const countdownElement = document.getElementById('countdown');

const timer = setInterval(() => {
const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;

countdownElement.textContent = `${minutes} mins ${seconds < 10 ? '0' : ''}${seconds} secs`;

timeLeft--;

if (timeLeft < 0) {
    clearInterval(timer);
    countdownElement.textContent = "0 mins 00 secs";
}
}, 1000);
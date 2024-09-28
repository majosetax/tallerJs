let countdown;


const eventDate = new Date("2024-11-18T23:59:59").getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainer = document.getElementById('countdown');
const startButton = document.getElementById('start-button');


startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    countdownContainer.style.display = 'flex'; 
    startTimer();
});

function startTimer() {
    countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerHTML = days < 10 ? "0" + days : days;
        hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
        minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdown);
            daysEl.innerHTML = "00";
            hoursEl.innerHTML = "00";
            minutesEl.innerHTML = "00";
            secondsEl.innerHTML = "00";
            document.querySelector('.description').innerHTML = "The event has started!";
        }
    }, 1000);
}

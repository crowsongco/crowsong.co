const countdownElement = document.getElementById('countdown');
const launchDate = new Date('October 1, 2024 06:00:00 PST').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeDifference = launchDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDifference < 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "We have launched!";
    }
};

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay
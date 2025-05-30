document.addEventListener('DOMContentLoaded', function() {
    const timeInput = document.getElementById('timeInput');
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timerDisplay');
    let timerInterval;
    let remainingTime;

    function updateDisplay() {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Break Finished!";
            return;
        }

        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerDisplay.textContent = `On Break ${formattedTime}`;
        remainingTime--;
    }

    startButton.addEventListener('click', function() {
        const timeValue = timeInput.value;

        if (!timeValue) {
            alert("Please enter a time.");
            return;
        }

        const timeParts = timeValue.split(':');
        if (timeParts.length !== 3) {
            alert("Please enter time in HH:mm:ss format");
            return;
        }
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const seconds = parseInt(timeParts[2], 10);

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            alert("Invalid time format. Please enter numbers.");
            return;
        }

        remainingTime = hours * 3600 + minutes * 60 + seconds;

        if (remainingTime < 0) {
            alert("Please enter a valid positive time.");
            return;
        }

        clearInterval(timerInterval); // Clear any existing timer

        updateDisplay(); // update display immediately

        timerInterval = setInterval(updateDisplay, 1000);

    });
});
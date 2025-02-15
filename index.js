document.addEventListener('DOMContentLoaded', () => {
    const breakLengthDisplay = document.getElementById('break-length');
    const sessionLengthDisplay = document.getElementById('session-length');
    const timerLabel = document.getElementById('timer-label');
    const timeLeftDisplay = document.getElementById('time-left');
    const startStopButton = document.getElementById('start_stop');
    const resetButton = document.getElementById('reset');
    const beep = document.getElementById('beep');
    const breakDecrement = document.getElementById('break-decrement');
    const breakIncrement = document.getElementById('break-increment');
    const sessionDecrement = document.getElementById('session-decrement');
    const sessionIncrement = document.getElementById('session-increment');

    let breakLength = 5;
    let sessionLength = 25;
    let timeLeft = sessionLength * 60;
    let timerRunning = false;
    let timerInterval;
    let currentTimerType = 'session'; // 'session' or 'break'

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeLeftDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                beep.play();

                if (currentTimerType === 'session') {
                    currentTimerType = 'break';
                    timerLabel.textContent = 'Break';
                    timeLeft = breakLength * 60;
                } else {
                    currentTimerType = 'session';
                    timerLabel.textContent = 'Session';
                    timeLeft = sessionLength * 60;
                }
                startTimer(); // Start the next timer
            }
        }, 1000);
        timerRunning = true;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
    }

    breakDecrement.addEventListener('click', () => {
        breakLength = Math.max(1, breakLength - 1);
        breakLengthDisplay.textContent = breakLength;
    });

    breakIncrement.addEventListener('click', () => {
        breakLength = Math.min(60, breakLength + 1);
        breakLengthDisplay.textContent = breakLength;
    });

    sessionDecrement.addEventListener('click', () => {
        sessionLength = Math.max(1, sessionLength - 1);
        sessionLengthDisplay.textContent = sessionLength;
        if (!timerRunning) { // Update timeLeft if timer is not running
            timeLeft = sessionLength * 60;
            updateDisplay();
        }
    });

    sessionIncrement.addEventListener('click', () => {
        sessionLength = Math.min(60, sessionLength + 1);
        sessionLengthDisplay.textContent = sessionLength;
        if (!timerRunning) { // Update timeLeft if timer is not running
            timeLeft = sessionLength * 60;
            updateDisplay();
        }
    });

    startStopButton.addEventListener('click', () => {
        if (timerRunning) {
            stopTimer();
            startStopButton.textContent = 'Start'; // Change button text
        } else {
            startTimer();
            startStopButton.textContent = 'Stop'; // Change button text
        }
    });

    resetButton.addEventListener('click', () => {
        stopTimer();
        breakLength = 5;
        sessionLength = 25;
        timeLeft = sessionLength * 60;
        currentTimerType = 'session';
        timerLabel.textContent = 'Session';
        breakLengthDisplay.textContent = breakLength;
        sessionLengthDisplay.textContent = sessionLength;
        updateDisplay();
        beep.pause();
        beep.currentTime = 0;
        startStopButton.textContent = 'Start'; // Reset button text
    });

    updateDisplay(); // Initial display update
});

# Build-a-25-5-Clock-App

# 25 + 5 Clock (Pomodoro Timer)

This project is a 25 + 5 Clock, also known as a Pomodoro Timer, built as part of the FreeCodeCamp Front End Development Libraries certification. It helps users manage their time between work sessions (25 minutes) and short breaks (5 minutes).

## Features

*   **Customizable Session and Break Lengths:** Users can adjust the duration of work sessions and breaks.
*   **Timer Display:** Shows the remaining time in minutes and seconds.
*   **Automatic Switching:** Automatically switches between session and break modes.
*   **Sound Alert:** Plays a sound when the timer finishes.
*   **Start/Stop Control:** Allows users to start and stop the timer.
*   **Reset Function:** Resets the timer to its initial state.
*   **Responsive Design:** The clock should center on the page and adapt to different screen sizes.

## Technologies Used

*   **HTML:** Structure of the webpage.
*   **CSS:** Styling of the clock.
*   **JavaScript:** Logic for the timer functionality and user interaction.

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  Open the `index.html` file in your web browser.

## Usage

1.  **Adjust Session/Break Lengths:** Use the "+" and "-" buttons to increase or decrease the session and break lengths (in minutes).
2.  **Start/Stop:** Click the "Start/Stop" button to begin or pause the timer. The button text will toggle between "Start" and "Stop".
3.  **Reset:** Click the "Reset" button to reset the timer to the initial session length and stop the timer.

## Code Explanation

*   **`index.html`:**
    *   Sets up the basic HTML structure, including elements for the controls (break and session lengths), timer display, start/stop and reset buttons, and the audio element for the sound.
    *   Includes the necessary CSS and JavaScript files, as well as the FreeCodeCamp test suite.
*   **`style.css`:**
    *   Styles the clock container, controls, timer display, and buttons.  Provides the visual appearance of the timer.
*   **`script.js`:**
    *   Variables are declared to store break length, session length, time left, timer state (running or not), timer interval, and the current timer type (session or break).
    *   `updateDisplay()` formats and updates the timer display.
    *   `startTimer()` starts the timer interval, decrementing `timeLeft` every second. It also handles switching between session and break modes and playing the sound alert.
    *   `stopTimer()` clears the timer interval.
    *   Event listeners are added to the increment/decrement buttons to adjust break and session lengths.  The session length is only updated if the timer is not running.
    *   Event listeners are added to the start/stop and reset buttons to control the timer.
    *   `updateDisplay()` is called initially to display the starting time.

## FreeCodeCamp Certification

This project fulfills the requirements for the FreeCodeCamp Front End Development Libraries certification. The included FreeCodeCamp test suite can be used to verify the project's functionality.

## Developer

Yousef Kaihar ([@Kihar_Youssf](https://x.com/Kihar_Youssf)) - [LinkedIn](https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

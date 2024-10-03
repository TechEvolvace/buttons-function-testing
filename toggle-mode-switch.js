/* Getting a reference of Experiment 7's mode switch toggle button by its id value */
const colorSchemeSwitch = document.getElementById('light-dark-mode-switch');

/* Getting a reference of the section in Experiment 7 with all the components that the light and dark mode will affect! */
const affectedComponents = document.getElementById('experiment-7-interactable-section');

/* Getting a reference of the message about the current mode in Experiment 7! */
const currentModeMessage = document.getElementById('experiment-7-message');

// Check if a mode is stored in localStorage
let savedMode = localStorage.getItem('theme');

// Apply the saved mode or default to light mode 
if(savedMode){
    setMode(savedMode);
} else {
    setMode('light'); // Default mode is set to light mode
}

// Apply appropriate class depending on whether the mode is light mode or dark mode
function setMode(mode){
    if(mode === 'dark'){
        affectedComponents.classList.add('darkMode');
        affectedComponents.classList.remove('lightMode');
    } else {
        affectedComponents.classList.add('lightMode');
        affectedComponents.classList.remove('darkMode');
    }
}

// Toggle between light and dakr mode on a button click 
colorSchemeSwitch.addEventListener('click', () => {
    let currentMode = affectedComponents.classList.contains('darkMode') ? 'dark' : 'light';

    // Switch to the other mode 
    if(currentMode === 'dark'){
        setMode('light');
        localStorage.setItem('theme', 'light');
        currentModeMessage.textContent = `Welcome to Light Mode!`;
    } else {
        setMode('dark');
        localStorage.setItem('theme', 'dark');
        currentModeMessage.textContent = `Welcome to Dark Mode!`;
    }
});


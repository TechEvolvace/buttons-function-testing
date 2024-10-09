/*

    Notable components for Experiment 8: 
    section container (class = "experiment-8-components", id = "experiment-8-interactable-section")

    > header 
       > toggle button (id = "toggle-switch")
          > svg (light mode icon)
          > svg (dark mode icon)

    > message-area 
       > paragraph-text (id = "experiment-8-message") 

*/

//  Getting a reference of Experiment 8's mode switch toggle button by its id value
const colorSchemeSwitch = document.getElementById("toggle-switch");

/* 
    Getting a reference of the section in Experiment 8 with all the components
    that the light dark mode will affect by its id value 
*/
const affectedComponents = document.getElementById('experiment-8-interactable-section');

/*  Getting a reference of the message about the current mode in Experiment 8! */
const currentModeMessage = document.getElementById('experiment-8-message');

/*  Getting a reference of the message about the current mode in Experiment 8! */
let savedMode = localStorage.getItem('theme');

// Then, will either applies the saved mode or defaults to light mode
if(savedMode){
    setMode(savedMode);
} else {
    setMode('light');
}

/* 
    Apply appropriate class to Experiment 8's components depending on
    whether the current mode is light mode or dark mode
*/
function setMode(mode){
    if(mode === 'dark'){
        affectedComponents.classList.add('darkMode');
        affectedComponents.classList.remove('lightMode');
    } else {
        affectedComponents.classList.add('lightMode');
        affectedComponents.classList.remove('darkMode');
    }
}

/* 
    Toggle between light and dark mode with a mouse click on the toggle button 
    and apply the changes on Experiment 7's components 
*/
colorSchemeSwitch.addEventListener('click', () => {
    /*
        Checks if darkMode class is currently used. If so, it's currently dark mode; 
        otherwise, it's currently light mode! 
    */
    let currentMode = affectedComponents.classList.contains('darkMode') ? 'dark' : 'light';

    //  Switch to the other mode 
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
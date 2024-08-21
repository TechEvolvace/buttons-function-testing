let numberEntered;

/* This function is used in Experiment 1 */
document.getElementById("submit-button").onclick = function(){
    numberEntered = document.getElementById("number-input").value;
    console.log("You entered " + numberEntered + ".");
    document.getElementById("display-input").textContent = "You entered " + numberEntered + "!"; 
}

let minNumberEntered;
let maxNumberEntered;

/* This function is used in Experiment 2 */
function processMaxAndMinInputs(){
    minNumberEntered = Number.parseInt(document.getElementById("min-number-input").value);
    maxNumberEntered = Number.parseInt(document.getElementById("max-number-input").value);
    let printResultArea = document.getElementById("experiment-2-message");
    printResultArea.style.backgroundColor = "whitesmoke";
    printResultArea.style.color = "red";

    let message = "";

    if(isNaN(minNumberEntered) || isNaN(maxNumberEntered)){
        if(isNaN(minNumberEntered)){
            message += "You haven't entered a number for a minimum number yet. Please enter a number for the minimum number!\n"; 
        }
    
        if(isNaN(maxNumberEntered)){
            message += "You haven't entered a number for a maximum number yet. Please enter a number for the maximum number!\n"; 
        }
    } else {
        if(maxGreaterThanMin(minNumberEntered, maxNumberEntered)){
            message += `All your inputs are valid.`;
            printResultArea.style.color = "green";
        } else {
            message += `The maximum number you entered is not greater than the minimum number you entered. Please enter a maximum number that is greater than the minimum number.`;
        }
    }
    
    printResultArea.textContent = message;    
    printResultArea.setAttribute(messageColor);
}

function maxGreaterThanMin(min, max){
    return max > min; 
}

document.getElementById("experiment-2-submit-button").addEventListener('click', processMaxAndMinInputs);
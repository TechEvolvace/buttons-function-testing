let numberEntered; 

document.getElementById("submit-button").onclick = function(){
    numberEntered = document.getElementById("number-input").value;
    console.log("You entered " + numberEntered + ".");
    document.getElementById("display-input").textContent = "You entered " + numberEntered + "!"; 
}

let maxNumberEntered;
let minNumberEntered;

function processMaxAndMinInputs(){
    maxNumberEntered = document.getElementById("max-number-input").value;
    minNumberEntered = document.getElementById("min-number-input").value;
    let printResultArea = document.getElementById("experiment-2-message"); 
    if(isNaN(maxNumberEntered) || isNaN(minNumberEntered)){
        printResultArea.textContent = (isNaN(maxNumberEntered) ? `Your input of ${maxNumberEntered} for the maximum number is not a number. Please enter a different number for a maximum number` 
        : isNaN(minNumberEntered) ? `Your input of ${minNumberEntered} for the minimum number is not a number. Please enter a different number for a minimum number` 
        : `Your input of ${minNumberEntered} for the minimum number and ${maxNumberEntered} for the maximum number are both not numbers! Please enter different numbers!`); 
    } else if(maxNumberEntered <= minNumberEntered){
        printResultArea.textContent = `The number you entered for the maximum number ${maxNumberEntered} is not greater than the minimum number you entered. Please enter a different maximum number that is greater than the minimum number you entered.`;
    } else {
        printResultArea.textContent = `Minimum number you entered: ${minNumberEntered}, Maximum number you entered: ${maxNumberEntered}; These are both valid inputs!`;
    }
}

document.getElementById("experiment-2-submit-button").addEventListener('click', processMaxAndMinInputs);
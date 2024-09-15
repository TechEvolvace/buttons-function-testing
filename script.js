/* This function is used in Experiment 1 */
document.getElementById("submit-button").onclick = function(){
    let numberEntered = document.getElementById("number-input").value;
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

/* Experiment 3 code */
let experimentThreeInput;
let displayExperiment3Message = document.createElement("p");
let displayExperiment3MessageArea = document.getElementById("experiment-3-message");
displayExperiment3MessageArea.appendChild(displayExperiment3Message);

/* Function used in Experiment 3 */
function printInputType(){

   displayExperiment3MessageArea.style.backgroundColor = 'rgb(155, 237, 255)';
   displayExperiment3Message.style.fontSize = "26px";
   displayExperiment3Message.style.color = "rgb(255, 87, 51)";
   let experimentThreeInput = document.getElementById("experiment-3-number").value;

   if(!(isNaN(experimentThreeInput))){
        console.log(`userInput value is an actual number`);
        displayExperiment3Message.textContent = "user's input here is actually an number!";
   } else {
        console.log(`userInput value is not an actual number`);
        displayExperiment3Message.textContent = "user's input here is actually not an number!";
   }

}

document.getElementById("experiment-3-button").addEventListener('click', printInputType);

/* Experiment 4 */
let experimentFourInput;

/* Function used in Experiment 4 */
function showOnlyNumberInputs(){

    console.log("Button successfully clicked, and this is now starting to process the input!");
    let displayExperimentFourMessage = document.getElementById("experiment-4-message"); 
    experimentFourInput = document.getElementById("experiment-4-number").value;
    
    if(experimentFourInput === "" || experimentFourInput === null){
        displayExperimentFourMessage.textContent = `You haven't input any numbers yet. Please enter a number.`; 
    } else if((isNaN(experimentFourInput))) {
        displayExperimentFourMessage.textContent = `Your input of ${experimentFourInput} is not a number. Please enter a number.`
    } else {
        displayExperimentFourMessage.textContent = `Your input of ${experimentFourInput} is a number now. Your input is valid.`;
    }
    
}

/* Experiment 5  */
let itemList = []; 

/* 
    When the add item to list button is clicked, this Will ensure that only 
    new items that are not already in the list will be added to the list!
*/
function addItemToList(event){

    event.preventDefault();
    let itemInput = document.getElementById("itemName").value; 
    let displayItemResult = document.getElementById("experiment-5-message"); 
    if(itemInput === ""){
        displayItemResult.textContent = `You didn't enter any inputs, so nothing has been added to the list!`;
    } else if(itemList.includes(itemInput)){
        displayItemResult.textContent = `You already have ${itemInput} in the list already, so this will not add another ${itemInput} to the list!`;
    } else {
        itemList.push(itemInput);
        displayItemResult.textContent = `You successfully added ${itemInput} to the list of items!`; 
    }

}

/*
    When the showAllListItems button is clicked, this will display
    a message with all the items in the list shown! 
*/
function showAllListItems(event){

    event.preventDefault();
    let displayItemResult = document.getElementById("experiment-5-message"); 
    let message = "Items in the list: "; 
    if(itemList.length === 0){
        message = `You don't have any thing in the list yet.`;
    } else {
        itemList.forEach((item) => message += `${item} `);
    }
    displayItemResult.textContent = message; 
    
}

/*
    When the remove button is clicked, this will check whether it's possible to remove
    the item from the list based on the name of the item the user entered before 
    removing the item from the list. This also displays an appropriate message 
    based on what kind of item is specified to be removed from the list! 
*/
function removeItemFromList(event){

    event.preventDefault();
    let itemInput = document.getElementById("itemName").value; 
    let displayItemResult = document.getElementById("experiment-5-message");
    if(itemInput === ""){
        displayItemResult.textContent = `You haven't entered any name of an item yet!`;
    } else if(!itemList.includes(itemInput)){
        displayItemResult.textContent = `The item you specified, ${itemInput}, to remove is not on the list.`; 
    } else {
        itemList = itemList.filter((item) => item !== itemInput);
        displayItemResult.textContent = `The item you specified, ${itemInput}, is succesfully removed from the list!`;
    }

}

/* Experiment 6 */ 
/*
    The paragraph element to contain a message about 
    the user's current favorite game, and is supposed to be 
    appended to the document as the child node to the section
    element with id "favorite-game-message".
*/
let favoriteGameMessage = document.createElement("p");
    favoriteGameMessage.style.backgroundColor = "#00076f";
    favoriteGameMessage.style.color = "#12f7ff"; 
    favoriteGameMessage.style.fontSize = "25px"; 
    favoriteGameMessage.style.border = "2px solid #12f7ff";
    favoriteGameMessage.style.borderRadius = "20px";
    favoriteGameMessage.style.padding = "1rem";
    favoriteGameMessage.style.transform = "translate(0px, -10px)"; 

/*
    This function displays a message about the user's current 
    favorite game, which was asked and collected from the user 
    as input. 
*/
function displayFavoriteGameMessage(){

    // Important variable for this function
    let message; 
    let favoriteGame = document.querySelector("#favoriteGame").value; 
    let favoriteGameMessageArea = document.getElementById("favorite-game-message");

    /* Determine what kind of message the display message will be */
    if(favoriteGame === "" || favoriteGame === null){
        message = `You haven't entered the name of your favorite game yet.`;
    } else {
        message = `Your favorite game is now ${favoriteGame}`;
    }

    // Update the display message to display 
    favoriteGameMessage.textContent = message;

    /* 
        Handle the append or modification to the message area child element 
        to contain the message about the user's current favorite game at the moment. 
    */
    if(!favoriteGameMessageArea.contains(favoriteGameMessage)){
        favoriteGameMessageArea.appendChild(favoriteGameMessage);
        console.log("Successfully appended the paragraph element that contains the text of the message to the message area!");
    }

}

/* Prevents the default refresh of the page whenever the user enters an input. */
document.getElementById("experiment-6-form").addEventListener("submit", (event) => {
    event.preventDefault();
});

/* Dive into deeper on how the DOM keeps track of the length of the list of child nodes for the message area element! */
function determineChildNodeLength(){
    let childNodeLengthMessage = document.querySelector("#child-node-length-of-experiment-6-message-area");
    childNodeLengthMessage.style.visibility = "visible";
    childNodeLengthMessage.textContent = `Child Node length for Experiment 6's message area element: ${document.getElementById("favorite-game-message").childNodes.length}`;
}
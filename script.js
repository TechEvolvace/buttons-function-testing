let numberEntered; 

document.getElementById("submit-button").onclick = function(){
    numberEntered = document.getElementById("number-input").value;
    console.log("You entered " + numberEntered + ".");
    const displayInputEntered = document.createElement("p");
    displayInputEntered.innerHTML = "You entered " + numberEntered + "!"; 
    document.append(displayNumberEntered);
}
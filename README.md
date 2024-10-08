# Testing Grounds for Buttons and Getting Inputs 

**It's time to set an experimenting ground for discovering unique ways to get user inputs.** 

## The Details 
* I'll record details about each experiment and their findings in this README file and in the user input testing website itself! 
* I'll also paste relevant code snippets for each experiment in this testing ground website, but you can take a look at the provided script.js file and see the comments designating each part of the code for which experiment! 

## Important Updates: 

Experiment 1 - 5 are now completely functional as intended! 

## Experiment 1 
* Basic example of an input area and a button that displays a number the user entered! 
* Assigned a function that gets activated by an click on Experiment 1's Submit Button to that button's onclick property in JavaScript!
* Used the button element to create the button, but didn't apply any styling 
* Findings: 
  * Without any condiitonal statement to verify that the input the user enters is a number, it will display anything the user enters!
  * The .value gets whatever the user enters in Experiment 1's input area and converts it into a string value! 
  * Assigning a function to a button's onclick property will run that assigned function only when that button is clicked! 

## Experiment 2 
* Basic example of 2 input areas for the minimum and maximum number and a button that displays a message about the validity of these two inputs! 
* Used the addEventListener function to add the click property to Experiment 2's button and the function that will run for Experiment 2! 
* Used a makeshift div element and styling to create an area that looks like a button to be clicked on! 
* Used the type="number" for the input areas for the maximum and minimum numbers! 
* Used the parseInt to first convert the extracted value from the input areas into a number 
* Used the isNaN to check if the input is a number or not 
* Findings:
    * The addEventListener function behaves similar to adding the onclick property to a specific element, which is the button for Experiment 2 
    * Despite not using the explicit HTML button element, the addEventListener function was able to make the div element act like a button that when clicked upon will run the function needed for Experiment 2! 
    * The type="number" explicitly prohibits the user from entering any non-number characters here! 
    * The parseInt helps convert the string value of the number entered from the .value command to an integer! 

## Experiment 3 
* Attempts to display a message that determines whether the "number" the user entered is a number or not 
* Used the type="text" for the input areas for this experiment, instead of type="number" 
* Used a makeshift div element and styling to create an area that looks like a button to be clicked on, similar to Experiment 2! 
* Findings: 
    * It does determine whether the input is a number or not
    * The one issue is that it determines an empty string as an actual number, when it shouldn't. 
        * This is because isNaN attempts to convert a string input into a number before checking if that new value is a number or not. 
        * An empty string when converted into a number is 0, which is acutally a number. This 0 is the value that isNaN checks if it's a number input or not, not the empty string "" value! 

## Experiment 4 
* Attempts to fix the empty string input as a valid number issue in Experiment 3 
* This experiment asks the user to enter a number input similar to Experiment 3! 
* Styled the div class for both the button and the display area, similar to Experiment 3! 
* Findings: 
    * By first checking if the input value extracted from the input area by the .value property is strictly equal to the empty string "" before displaying a message, there will now be a different message when the user hasn't entered anything in the input area.

## Experiment 5 
* Used the HTML form element to structure the input areas and buttons more cleanly 
* The function passed to the onclick property for all the buttons involved in Experiment 5 also passed in event as the parameter! 
* Findings: 
    * By using the event parameter when calling their respective functions, we were able to call upon event.preventDefault() to avoid the issue of reloading the page! This ensures that the intended message gets displayed on the website! 
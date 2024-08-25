# Testing Grounds for Buttons and Getting Inputs 

It's time to set an experimenting ground for discovering unique ways to get user inputs. 

## Update: 

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
    * the addEventListener function behaves similar to adding the onclick property to a specific element, which is the button for Experiment 2 
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
//Get the user input
function getValue(){

    //Ensure the alert is invisible.
    document.getElementById("alert").classList.add("invisible");

    //Remove the alert background color.
    document.getElementById("alert").classList.remove("alert-success");
    document.getElementById("alert").classList.remove("alert-danger");

    //Get user string from the page.
    let userString = document.getElementById("userString").value;

    //Check for a palindrome
    let returnObj = checkForPalindrome(userString);

    //Display message to the screen.
    displayMessage(returnObj);
}

//Check if the string is a palindrome.
function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    //Remove spaces and special characters.
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    if (revString == userString) {
        returnObj.msg = "Well Done! You've entered a palindrome!"
        returnObj.alertColor = "alert-success"
    }
    else{
        returnObj.msg = "Sorry, you did not enter a palindrome."
        returnObj.alertColor = "alert-danger"
    }

    returnObj.reversed = revString;

    return returnObj;

}

//Display the reversed string to the user.
//View function.
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("alert").classList.add(returnObj.alertColor);
    
}
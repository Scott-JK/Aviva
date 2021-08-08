//Get the string from the page.
//Controller function.
function getValue(){

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let filString = filteredString(userString);
    let revString = reverseString(userString);

    displayString(revString);
}



//Remove the special characters.
function filteredString(userString){
    let filteredString = [];
    let filteredString = revString.replace(/[^a-zA-Z0-9]/, '');
}



//Reverse the string.
//Logic function.
function reverseString(userString){

    let revString = [];

    //Reverse a string using a for loop.
    for (let index = userString.length - 1; index  >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}




//Determine if the string is a palindrome.




//Display the results to the user if it is a palindrome.
//View function.
function displayString(revString){

    //Write to the page.
    document.getElementById("msg").innerHTML = `Your phrase reversed is ${revString}`;
    //Show the alert box.
    document.getElementById("alert").classList.remove("invisible");
}

//Display the results to the user if it is not a palindrome.
//View function.
function displayString(revString){

    //Write to the page.
    document.getElementById("msgFail").innerHTML = `Your phrase reversed is ${revString}`;
    //Show the alert box.
    document.getElementById("alertFail").classList.remove("invisible");
}
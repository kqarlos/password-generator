
var passwordPointer = document.getElementById("password");
var length;
var hasSpecialChars;
var hasNumericChars;
var hasLowerCase;
var hasUpperCase;
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-=";
var characters = [lowerCaseChars, upperCaseChars, numericChars, specialChars];
var choices = [];
var newPassword = "";

//Calls on checkrequirements() to set values to the requirements booleans
//Based on the requirements pushes the desired indices of the arrays we can use from the characters array into the choices array
//Generates the password by randomly chosing an index from the choices array. This index is used in the characters array to pick a
//character array. Then a character is selected randomly from this array. This is reapeated according to the chosen length of the password
//Password is displayed
//Variables are cleared for future use.
function generatePassword() {

    checkRequirements();

    if (hasLowerCase) {
        choices.push(0);
    } if (hasUpperCase) {
        choices.push(1);
    } if (hasNumericChars) {
        choices.push(2);
    } if (hasSpecialChars) {
        choices.push(3);
    }
    // console.log("Choices: " + choices);
    for (var i = 0; i < length; i++) {
        var charArray = choices[Math.floor(Math.random() * choices.length)];
        // console.log("Chosen array: " + charArray);
        newPassword += characters[charArray][Math.floor(Math.random() * characters[charArray].length)];
    }

    passwordPointer.innerHTML = newPassword;
    clear();
}

// Creates input element genPassword with the password value
// The input element is used to select the password and copy it to the clipboard
function copyToClipboard() {
    var genPass = document.createElement('input');
    document.body.appendChild(genPass);
    genPass.value = passwordPointer.innerText;
    genPass.select();
    genPass.setSelectionRange(0, 99999);
    document.execCommand("copy", false);
    genPass.remove();
}

function clear() {
    choices = [];
    newPassword = "";
}

function checkRequirements() {
    do {
        length = parseInt(prompt("How many characters"), 10);
    } while (isNaN(length) || length < 8 || length > 128)

    hasLowerCase = confirm("Would you like lower case characters?");
    hasUpperCase = confirm("Would you like upper case characters?");
    hasNumericChars = confirm("Would you like numeric characters?")
    hasSpecialChars = confirm("Would you like special characters?");

    // console.log("Length: " + length + ", Lower case: " + hasLowerCase + ", Upper case: " + hasUpperCase + ", Numeric: " + hasNumericChars + ", Special: " + hasSpecialChars);

}
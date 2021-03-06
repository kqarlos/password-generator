
var passwordEl = document.getElementById("password");
var options = {};
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-=";
var choices = "";
var newPassword = "";

//Calls on checkrequirements() to set values to the requirements booleans
//Based on the requirements pushes desired chars into pool choices
//Generates the password by randomly chosing a char from a pool choices. 
// This is reapeated according to the chosen length of the password
//Variables are cleared for future use.
function generatePassword() {
    // Check user options. False if user cancels prompt
    let check = checkRequirements();
    if (check) {
         // Add to pool of char choices
        if (options.hasLowerCase) {
            choices += lowerCaseChars;
        } if (options.hasUpperCase) {
            choices += upperCaseChars;
        } if (options.hasNumericChars) {
            choices += numericChars;
        } if (options.hasSpecialChars) {
            choices += specialChars;
        }
        for (var i = 0; i < options.length; i++) {
            var char = choices[Math.floor(Math.random() * choices.length)];
            newPassword += char;
        }
        //Password is displayed
        passwordEl.innerHTML = newPassword;
        clear();
    }
}

// Creates input element genPassword with the password value
// The input element is used to select the password and copy it to the clipboard
function copyToClipboard() {
    var genPass = document.createElement('input');
    document.body.appendChild(genPass);
    genPass.value = passwordEl.innerText;
    genPass.select();
    genPass.setSelectionRange(0, 99999);
    document.execCommand("copy", false);
    genPass.remove();
    alert("Password copied to clipboard!");
}

// Resets values
function clear() {
    choices = "";
    newPassword = "";
    options = {};
}

// Asks user for requirements return false if user cancels
function checkRequirements() {
    // Ask user for password length until we receive a valid option or the user cancels
    do {
        options.length = prompt("How many characters");
        if (options.length == null) {
            return false;
        }
        options.length = parseInt(options.length, 10);
    } while (isNaN(options.length) || options.length < 8 || options.length > 128)

    options.hasLowerCase = confirm("Would you like lower case characters?");
    options.hasUpperCase = confirm("Would you like upper case characters?");
    options.hasNumericChars = confirm("Would you like numeric characters?")
    options.hasSpecialChars = confirm("Would you like special characters?");
    return true;
}
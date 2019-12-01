
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

function generatePassword() {

    var newPassword = "";
    do {
        length = parseInt(prompt("How many characters"), 10);
    } while (isNaN(length) || length < 8 || length > 128)

    hasNumericChars = confirm("Would you like numeric characters?")
    hasSpecialChars = confirm("Would you like special characters?");
    hasLowerCase = confirm("Would you like lower case characters?");
    hasUpperCase = confirm("Would you like upper case characters?");

    // console.log("Length: " + length + ", Numerics: " + hasNumericChars + ", Special: " + hasSpecialChars + ", Lower Case: " + hasLowerCase + ", Upper case: " + hasUpperCase);

    for (var i = 0; i < length; i++) {
        var charArray = Math.floor(Math.random() * characters.length);
        // console.log(charArray);
        newPassword += characters[charArray][Math.floor(Math.random() * characters[charArray].length)];
    }

    passwordPointer.innerHTML = newPassword;
}

function copyToClipboard() {


}

var passwordPointer = document.getElementById("password");
var length;
var hasScpecialChars;
var hasNumericChars;
var haslowerCase;
var hasUpperCase;
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=";

function generatePassword() {

    var newPassword = "";
    do {
        length = parseInt(prompt("How many characters"), 10);
    } while (isNaN(length) || length < 8 || length > 128)

    for (var i = 0; i < length; i++){
        newPassword += characters[Math.floor(Math.random() * characters.length)];
    }

    
    passwordPointer.innerHTML = newPassword;

}

function copyToClipboard() {


}
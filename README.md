# Password Generator 🔑


</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/password-generator?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/password-generator?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/password-generator?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/password-generator?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/password-generator?style=for-the-badge" alt="Total Lines" />   
    <img src="https://img.shields.io/github/last-commit/kqarlos/password-generator?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/password-generator?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>


## Description

Passwords generator is a web application that generates a password between 8 and 128 characters based on certain requirements chosen by the user. It also has an option for copying the password to the clipboard.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

This application is compatible with the most commonly used web browsers

<p align="center">
    <a href="https://kqarlos.github.io/password-generator/index.html"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screenshots

![Site](assets/images/site-pic.png)

### Snippets

generatePassword();
* This function calls on checkRequirements() to set values to the requirements booleans. It will be false if the user cancels the prompt. Based on the requirements it pushes the desired characters into a pool choices. It generates the password by randomly chosing a character from the choices pool and addidng it to the password. This is reapeated according to the chosen length of the password. Then, the password is displayed and variables are cleared for future use.

```javascript

    function generatePassword() {
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
            //display password
            passwordEl.innerHTML = newPassword;
            clear();
        }
    }
```

copyToClipboard();

* This shows the function copyToClipboard(). This function creates an input element genPassword wit the password value. This element then is used to select the password value and execute a copy command on it. This effectively copies the password to the clipboard. 

```javascript
    function copyToClipboard() {
        var genPass = document.createElement('input');
        document.body.appendChild(genPass);
        genPass.value = passwordPointer.innerText;
        genPass.select();
        genPass.setSelectionRange(0, 99999);
        document.execCommand("copy", false);
        genPass.remove();
        alert("Password copied to clipboard!");
    }
```

## Credits

### Author

- Carlos Toledo: [portfolio](https://kqarlos.github.io)
- Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)

### Built With

<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
</p>
</br>

## License

<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/password-generator?style=for-the-badge" alt="MIT license" />
</p>
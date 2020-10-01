// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt user and generate PW based on parameters
function generatePassword() {
  var pwLength = prompt("How long would you like your password to be?");
  console.log("Length: " + pwLength);

  if ((isNaN(pwLength)) || (pwLength < 8 || pwLength > 128)) {
    alert('Invalid entry. Must enter a number between 8 and 128.');
    return "";
  }

  var sc = confirm('Would you like to use $peci@l characters?');
  var lc = confirm('Would you like to use lower case letters?');
  var uc = confirm('Would you like to use Upper Case Letters?');
  var nc = confirm('Would you like to use numb3rs?');

  var scString = '!@#$%^&*()_+/?[]{}\|';
  var lcString = 'abcdefghijklmnopqrstuvwxyz';
  var ucString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var ncString = '0123456789';

  var finalString = '';

  function finalStringConcat() {

    if (sc === true) {
      finalString = finalString.concat(scString);
      console.log("Include Special Characters");
    }

    if (lc === true) {
      finalString = finalString.concat(lcString);
      console.log("Include lower case characters");
    }

    if (uc === true) {
      finalString = finalString.concat(ucString);
      console.log("Include upper case characters");
    }

    if (nc === true) {
      finalString = finalString.concat(ncString);
      console.log("Include numbers");
    }
  }

  finalStringConcat();

  var pwResult = '';
  function makePW() {
    for (i=0 ; i < pwLength; i++) {
      pwResult += finalString.charAt(Math.floor(Math.random() * finalString.length));
    }
  }

  makePW();
  return pwResult;

}

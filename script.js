// Assignment Code
var generateBtn = document.querySelector("#generate");


//Function to generate password
function generatePassword() {

// Create arrays for characters 

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Prompts to select password length and include arrays

var numCharacter = prompt ("How many characters 8-128?");
var numbers = confirm ("Include numbers?");
var uppercases = confirm ("Include upper-case?");
var lowercases = confirm ("Include lower-case?");
var characters = confirm ("Include special characters?");

// Empty arrays
 
var resultArray = [];
var userArray = [];

// Conditions of the array

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Writes password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds event listener to "Generate" button

generateBtn.addEventListener("click", writePassword);


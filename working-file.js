
// Arrays for the functions created
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector('#generate');

var finalCharArray = [];

if (lowerCase) {
  finalCharArray.push(lowerCase)
}

if (upperCase) {
  finalCharArray.push(upperCase)
}

if (numbers) {
  finalCharArray.push(numbers)
}

if (specialCharacters) {
  finalCharArray.push(specialCharacters)
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function lengthCheck() {
  var number = prompt("Please enter the number of characters you want for your new password. It must be between 8 to 128.");
  if (number < 8 || number > 128 || isNaN(number)) {
    console.log("f", number)
    return lengthCheck()
  }
  return number
}
// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = lengthCheck()
  console.log(passwordLength)
  //lengthCheck();
    
  var numbers = confirm("Click OK to include numbers in your password");

  var lowerCases = confirm("Click OK to include lowercase letters in your password");

  var upperCases = confirm("Click OK to include uppercase letters in your password");

  var special = confirm("Click OK to include special characters in your password");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10)); 
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers(); 
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  
  
  for (var i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomCharacterPicked = finalCharArray[Math.floor(Math.random() * finalCharArray.length)];
    randomPasswordGenerated += randomCharacterPicked;

   }
   console.log(randomPasswordGenerated);
   console.log(passwordLength);
   console.log(minimumCount);

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}
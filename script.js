// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("Please enter a length for your password between 8-128, inclusive");
if(length < 8) {
  alert("Password too short! Please refresh page");
} else if(length > 128) {
  alert("Password too long! Please refresh page");
} else {
  var upperCase = prompt("Would you like to include uppercase letters? (Y/N)");
  var lowerCase = prompt("Would you like to include lowercase letters? (Y/N)");
  var numbers = prompt("Would you like to include numbers? (Y/N)");
  var specialCharacters = prompt("Would you like to include special characters? (Y/N)");
}

// Ignore Case Sensitivity in Generate Password
upperCase = upperCase.toLowerCase();
lowerCase = lowerCase.toLowerCase();
numbers = numbers.toLowerCase();
specialCharacters = specialCharacters.toLowerCase();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password with Given Parameters
function generatePassword() {
  var passLength = length;
  var password="";
  var chars = "";
  var charNum = 0;

  if(upperCase == "y") {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charNum += 26;
  } if(lowerCase == "y") {
    chars += "abcdefghijklmnopqrstuvwxyz";
    charNum += 26;
  } if(numbers == "y") {
    chars += "0123456789";
    charNum += 10;
  } if(specialCharacters == "y") {
    chars += "!()-.?[]_`~;:@#$%^&*+=";
    charNum += 22;
  } if(upperCase == "n" && lowerCase == "n" && numbers == "n" && specialCharacters == "n") {
    password += "No Criteria Selected";
  }
  
  for(var i = 0; i < passLength; i++) {
    var char = Math.round((Math.random()*(charNum-1)));
    password += chars.charAt(char);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

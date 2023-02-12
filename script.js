// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("Please enter a length for your password between 8-128, inclusive");
if(length < 8) {
  alert("Password too short! Please refresh page");
} else if(length > 128) {
  alert("Password too long! Please refresh page");
} else if(!(8 <= length <= 128)) {
  alert("Enter a number! Please refresh page");
} else {
  var upperCase = prompt("Would you like to include uppercase letters? (Y/N)");
  upperCase = upperCase.toLowerCase();
  if(upperCase != "y" && upperCase != "n") {
    alert("Enter Y or N! Please refresh page");
  } else {
    var lowerCase = prompt("Would you like to include lowercase letters? (Y/N)");
    lowerCase = lowerCase.toLowerCase();
    if(lowerCase != "y" && lowerCase != "n") {
      alert("Enter Y or N! Please refresh page");
    } else {
      var numbers = prompt("Would you like to include numbers? (Y/N)");
      numbers = numbers.toLowerCase();
      if(numbers != "y" && numbers != "n") {
        alert("Enter Y or N! Please refresh page");
      } else {
        var specialCharacters = prompt("Would you like to include special characters? (Y/N)");     
        specialCharacters = specialCharacters.toLowerCase();
        if(specialCharacters != "y" && specialCharacters != "n") {
          alert("Enter Y or N! Please refresh page");
        }
      }
    }
  }
}

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

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

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["!","@","#","$","%","^","&","*","+","="]

function generatePassword(){
  var choices = []
  var chosenLength = parseInt(prompt("How many characters would you like your password to contain?"))
  if (!(chosenLength >= 8 && chosenLength <= 128) ) {
    alert("Password must be between 8 and 128 characters.")
    return
  }

  var lowercaseChoice = confirm ("Would you like to include lowercase letters?")
  if (lowercaseChoice) {
    choices = choices.concat(lowercase);
  }

  var uppercaseChoice = confirm ("Would you like to include uppercase letters?")
  if (uppercaseChoice) {
    choices = choices.concat(uppercase);
  }

  var numbersChoice = confirm ("Would you like to include numbers?")
  if (numbersChoice) {
    choices = choices.concat(numbers);
  }

  var specialChoice = confirm ("Would you like to include special characters?")
  if (specialChoice) {
    choices = choices.concat(special);
  }



  var possible = [];
  finalPassword = "";

  function randomizer(arr) {
    var random = Math.floor(Math.random() * arr.length);
    var item = arr[random];
    return item
  }


  for (var i = 0; i < choices.length; i++) {
var randomItem = randomizer(choices);
possible.push(randomItem);
  }

 for (var i = 0; i < chosenLength; i++) {
    var randomItem = randomizer(possible);
    finalPassword += randomItem;
  }

return finalPassword;
}
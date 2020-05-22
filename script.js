// Write password to the #password input
function generatePassword() {


  var fromPrompt = prompt("Select a number 8 through 128");
  var totalCharacters = parseInt(fromPrompt);
  console.log(totalCharacters);

  if ( totalCharacters < 8 || totalCharacters > 128 ) {
    alert("Value must be between 8 - 128 characters");
  } 
  else {
    var characterTypes = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      specialCharacters: "!@#$%^&*()_-+=[]{}<>?",
      };
    
      var useLowerCase = confirm("Use Lowercase?");
      var useUpperCase =  confirm("Use Uppercase?");
      var useSpecialChar = confirm("Use Special Characters?");
      var useNumbers = confirm("Use Numbers?");
    
      var password = "";
    
      var possibleCharacters = [];
    
        if (useUpperCase) {
          possibleCharacters = possibleCharacters.concat(characterTypes.lowercase.toUpperCase().split(""));
    
        }
        if (useLowerCase) {
          possibleCharacters = possibleCharacters.concat(characterTypes.lowercase.split(""));
    
        } 
        if (useSpecialChar) {
          possibleCharacters = possibleCharacters.concat(characterTypes.specialCharacters.split(""));
    
        } 
        if (useNumbers) {
          for ( i = 0; i < 10; i++) {
            possibleCharacters.push(i);
          }
        }
    
    for (var i = 0; i < totalCharacters; i++) {
      var position = Math.floor(Math.random() * possibleCharacters.length);
      password = password + possibleCharacters[position];
    }
  }

  var output = document.getElementById("password");
  output.innerHTML = password;

}
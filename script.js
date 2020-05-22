// Write password to the #password input
function writePassword() {


  var fromPrompt = prompt("Select a number 8 through 128");
  var totalCharacters = parseInt(fromPrompt);
  console.log(totalCharacters);

  if ( totalCharacters < 8 || totalCharacters > 128 ) {
    alert("Value must be between 8 - 128 characters");
  } 
  else {
    var typesOfCharacters = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      specialCharacters: "!@#$%^&*()_-+=[]{}<>?",
      };
    
      var useLowerCase = confirm("Use Lowercase?");
      var useUpperCase =  confirm("Use Uppercase?");
      var useSpecialChar = confirm("Use Special Characters?");
      var useNumbers = confirm("Use Numbers?");
    
      console.log("L: ", useLowerCase);
      console.log("U: ", useUpperCase);
      console.log("S: ", useSpecialChar);
      console.log("N: ", useNumbers);
    
      var password = "";
    
      var possibleCharacters = [];
    
        if (useUpperCase) {
          possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.toUpperCase().split(""));
    
        }
        if (useLowerCase) {
          possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.split(""));
    
        } 
        if (useSpecialChar) {
          possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
    
        } 
        if (useNumbers) {
          for ( i = 0; i < 10; i++) {
            possibleCharacters.push(i);
          }
        }
    
      console.log(possibleCharacters);
    for (var i = 0; i < totalCharacters; i++) {
      var position = Math.floor(Math.random() * possibleCharacters.length);
      password = password + possibleCharacters[position];
    }
  }

  var output = document.getElementById("password");
  output.innerHTML = password;

  console.log(password);
}
<center>
<p> 
    <img src="IMGBIN_flint-mass-transportation-authority-public-transport-dtu-transport-massachusetts-bay-transportation-authority-png_stNB0rpH.png" width="100" height="100" alt="headerImage">
    <h1>Password Generator</h1>
</p>
</center>

 
​
​
## Description
- A webpage built with the Bootstrap and some simple CSS.
- The page is designed to generate passwords based on the users criteria.

## Usage
- Generate a password up to 128 characters.

`````
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
​`````

# Password-Generator

## Project Description
----------------------------------------------------------------------------
[Password Generator](https://antonio36alv.github.io/Password-Generator/)

The goal was to implement code that would generate a password, with a web page that was already given and a stylesheet. There was also some javascript that was provided. When the generate button was clicked, my job was to then prompt the user what kind of characters they wanted for their password (uppercase, lowercase, numeric, and symbols) and what the length of the password should be (between 8-128). Character specification is done through checkboxes and character length is done through a textbox that also has values listed. The application ensures that the user check at least one check box. It also checks to see that the user either has picked/typed a character length and that it is one that falls between 8-128. This is all done through a div that appears when the generate button is clicked. 


[Link to Demo Video](https://drive.google.com/file/d/1JIRmYdO2dWlLpwlpUF70eELsAAQO783y/preview)

### Steps taken in the video
1. Clicked the generate button

2. The Div, that is responsible for having the user enter their criteria, has appeared.

3. Proof of validation.
    1. Did not select any boxes or enter a length - result: text appears at the bottom stating no boxes where checked
    2. Checked a box but did not select/type a length - result: text appears at the bottomm stating there was a problem with the character lenght
    2. Checked a box but selected/typed a length under 8 - result: text appears at the bottomm stating the same issue as before, since there was no reason for it to change.

4. Criteria is entered correctly and the numeric checkbox was entered. The criteria div has gone away and we are presented with a randomly generated password. 

5. Generate password is pressed again and so again the criteria div appears again. The uppercase and lowercase checkboxes are then selected (in addition to the already 
checked numeric checkbox). The done button is pressed and another password is generated, but this time with the added criteria of characters.

6. Once again the generated password button is clicked. The criteria div is once again presented. The reset button is clicked in order to demonstrate that it clears all input/activity on the form.

### Screenshots
---------------------
#### Original Demo
![Original Demo](https://antonio36alv.github.io/Password-Generator/images/03-javascript-homework-demo.png)

#### Before Any Interaction
![Origin](https://antonio36alv.github.io/Password-Generator/images/origin.PNG)

#### After Pressing the Generate Button
![After Generate](https://antonio36alv.github.io/Password-Generator/images/afterGenerate.PNG)

#### Validation
![Validation](https://antonio36alv.github.io/Password-Generator/images/validation.PNG)

![Test Criteria/Validation](https://antonio36alv.github.io/Password-Generator/images/testCriteria.PNG)

#### Result/Generated Password
![Result](https://antonio36alv.github.io/Password-Generator/images/result.PNG)
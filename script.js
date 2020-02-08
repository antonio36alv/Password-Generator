var upperCheck = document.getElementById("upperCheck");
var lowerCheck = document.getElementById("lowerCheck");
var numCheck = document.getElementById("numCheck");
var symbCheck = document.getElementById("symbCheck");  
var criteriaDiv = document.getElementById("criteriaDiv");
var blurPage = document.getElementById("blur");
var listValues = document.getElementById("lengths");
var lengthsList = document.getElementById("lengthsList");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var doneBtn = document.querySelector("#doneBtn");

var statusP = document.getElementById("status");

var exceptionMessage;

for(i = 8; i <= 128; i++){
  let newOP = document.createElement("OPTION");
  newOP.setAttribute("value", i);
  listValues.appendChild(newOP);
}

doneBtn.addEventListener("click", function (){
  
  var criteriaIndexes = [];
  if(!checkCriteria()) {
    //triggers when criteria has no met the minimum  
    statusP.textContent = exceptionMessage;
  } else {
    statusP.textContent = "";
          //if uppper is checked push 0 to the array
          if(upperCheck.checked === true){
            criteriaIndexes.push(0);
          }
          //if lower is checked push 1 to the array
          if(lowerCheck.checked === true){
            criteriaIndexes.push(1);
          }
          ////if number is checked push 2 to the array
          if(numCheck.checked === true){
            criteriaIndexes.push(2);
          }
          //if symb is checked push 3 to the array
          if(symbCheck.checked === true){
            criteriaIndexes.push(3);
          }
  //everything should have went well, now the criteria to write the password
  writePassword(generatePassword(criteriaIndexes, lengthsList.value));
  reset();
  }
});

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  //will reveal the div form responsible for prompting the user their criteria
  criteriaDiv.style.zIndex = "1";
  blurPage.style.filter = "blur(4px)";
});

function checkCriteria(){
  if(!upperCheck.checked  && !lowerCheck.checked && !numCheck.checked && !symbCheck.checked){
    //if everything is unchecked return false
    exceptionMessage = "You did not select any checkboxes. At least one must be selected in order to generate your password.";
    return false;
  } else if(lengthsList.value==="" || lengthsList.value < 8 || lengthsList.value > 128) {
    //if no value was entered into the list retrun false
    exceptionMessage = "There was a problem with your character length selection. Try again please.";
    return false;
  } else {
    //only when both these tests are passed will we return true
    return true;
  }
}

function writePassword(password) {
  document.getElementById("password").textContent = password;
}

// generate password to the #password input
function generatePassword(criteria, charL) {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  //0 UPPER
  //1 lower
  //2 numbers
  //3 special

  //no less than 8 no more than 128

  //if criteria contains nothing prompt again
  var passwordArr = [];
  var char = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "abcdefghijklmnopqrstuvwxyz",
            "0123456789",
            "!()?[]`~;:!#$%^&*+="];

  for(i = 0; i < charL; i++){
    /*
        will loop until all characters are written
        criteria comes in as an array [x, x, x]
        we need to randomly pick one of those numbers
    */
    //we need to pick a string from the array. Then we will proceed to then pick a random character.
    //  pick a random element in char array.
    var randomElement = criteria[Math.floor(Math.random() * criteria.length)];
     passwordArr[i] = char[randomElement].charAt(Math.floor(Math.random() * char[randomElement].length));
  }
return (passwordArr.join(""));
//  https://www.sitepoint.com/javascript-fast-string-concatenation/
}

function reset(){
  criteriaDiv.style.zIndex = "-1";
  blurPage.style.filter = "none";
}
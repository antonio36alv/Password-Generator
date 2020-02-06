// Assignment Code
var generateBtn = document.querySelector("#generate");
var doneBtn = document.querySelector("#doneBtn");

var populate = document.getElementById("lengths");

for(i = 8; i <= 128; i++){
  let newOP = document.createElement("OPTION");
  newOP.setAttribute("value", i);
  populate.appendChild(newOP);
}

// Write password to the #password input
function writePassword(criteria, charL) {
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

  for(i = 0; i <= charL; i++){
    /*
        will loop until all characters are written
        criteria comes in as an array [x, x, x]
        we need to randomly pick one of those numbers
    */
    //we need to pick a string from the array. Then we will proceed to then pick a random character.
    //  pick a random element in char array.
    var randomElement = criteria[Math.floor(Math.random() * criteria.length)];
    // char[Math.floor(Math.random() * charL)].charAt(Math.floor(Math.random() * ));
     passwordArr[i] = char[randomElement].charAt(Math.floor(Math.random() * char[randomElement].length));
    //passwordArr.push(char[randomElement].charAt(3));//Math.floor(Math.random() * char[randomElement].length));
    alert(randomElement + " " + i);
  }
alert(passwordArr.join(""));
//  https://www.sitepoint.com/javascript-fast-string-concatenation/
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){

  document.getElementById("criteriaDiv").style.zIndex = "2";
  console.log("show me the money");
});

doneBtn.addEventListener("click", function(){
  var upperCheck = document.getElementById("upperCheck");
  var lowerCheck = document.getElementById("lowerCheck");
  var numCheck = document.getElementById("numCheck");
  var symbCheck = document.getElementById("symbCheck");  
  var jawn = document.getElementById("jawn");
  var criteriaIndexes = [];

  if(!upperCheck.checked  && !lowerCheck.checked && !numCheck.checked && !symbCheck.checked){
    //change alert, make user enter criteria again
    alert("why you do this");
  } else {
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
  }
  writePassword(criteriaIndexes, jawn.value);//TODO need to appropriate char. length arguement.
});
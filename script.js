console.log(document.querySelectorAll("form")[0].childNodes);
var upperCheck = document.getElementById("upperCheck");
var lowerCheck = document.getElementById("lowerCheck");
var numCheck = document.getElementById("numCheck");
var symbCheck = document.getElementById("symbCheck");  

var listValues = document.getElementById("lengths");

var lengthsList = document.getElementById("lengthsList");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var doneBtn = document.querySelector("#doneBtn");

for(i = 8; i <= 128; i++){
  let newOP = document.createElement("OPTION");
  newOP.setAttribute("value", i);
  listValues.appendChild(newOP);
}

// console.log(lengthsList.nextElementSibling.children[].value);
console.log(lengthsList.nextElementSibling.childNodes);
console.log(lengthsList.nextElementSibling.children[0]);

doneBtn.addEventListener("click", function (){
  //TODO comment
  console.log("hhhh");
  console.log(lengthsList.nextElementSibling.childNodes);
  console.log(lengthsList.nextElementSibling.children[0]);
  var criteriaIndexes = [];
  if(!checkCriteria()) {
    //triggers when criteria has no met the minimum  
    console.log("something is wrong with your criteria");
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
  console.log(document.getElementById("lengthsList").value + " hello");
  console.log(lengthsList.value + " hello");
  //everything should have went well, now the criteria to write the password
  writePassword(generatePassword(criteriaIndexes, lengthsList.value));
  reset();
  }
});

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  //will reveal the div form responsible for prompting the user their criteria
  // document.getElementById("criteriaDiv").style.zIndex = "-1";
  console.log("show me the money");

 document.getElementById("criteriaDiv").style.zIndex = "0";
});

function checkCriteria(){
  if(!upperCheck.checked  && !lowerCheck.checked && !numCheck.checked && !symbCheck.checked){
    //if everything is unchecked return false
    console.log("failed bc no boxes were checked");
    return false;
  } else if(lengthsList.value==="") {
    //if no value was entered into the list retrun false
    console.log("failed bc of no length selected");
    return false;
  } else {
    //only when both these tests are passed will we return true
    console.log("check function passed");
    console.log(listValues.childElementCount);
    return true;
  }
}

function writePassword(password) {
  alert(password);

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
    // alert(randomElement + " " + i);
  }
return (passwordArr.join(""));
//  https://www.sitepoint.com/javascript-fast-string-concatenation/
}

function reset(){
  document.getElementById("criteriaDiv").style.zIndex = "-1";
}
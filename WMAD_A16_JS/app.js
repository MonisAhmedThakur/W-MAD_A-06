//--------------Chapter#35-38_(Q01)----------------

// tellTime();

// function tellTime() {
//     var now = new Date();
//     alert(now);
//     }

//--------------Chapter#35-38_(Q02)----------------

// var fName = prompt("Enter your first name:")
// var lName = prompt("Enter your Last name:")

// function greetUser() {
//     alert("Hello! " + fName+ " " + lName);
//     }
// greetUser(fName,lName);

//--------------Chapter#35-38_(Q03)----------------

// var fNum = +prompt("Enter your first value")
// var sNum = +prompt("Enter your second value:")

// function sumValue() {
//     document.write(fNum, ' + ',  sNum, " = ", fNum + sNum);
//     }
// sumValue(fNum,sNum);

//--------------Chapter#35-38_(Q04)----------------

// var fNum = +prompt("Enter your first value");
// var userOpt = prompt("Enter any Operator");
// var sNum = +prompt("Enter your second value:");

// function userCalculator(fNum,userOpt,sNum) {
//     if (userOpt === "+"){
//     return fNum + sNum;
//     }
//     else if (userOpt === "-"){
//     return fNum - sNum;
//     }
//     else if (userOpt === "*"){
//     return fNum * sNum;
//     }
//     else if (userOpt === "/"){
//     return fNum / sNum;
//     }
// }
// document.write(fNum, " ", userOpt, " ", sNum, " = ", userCalculator(fNum,userOpt,sNum) );

//--------------Chapter#35-38_(Q05)----------------

// function numSquares(){
// var sqResult = userNum * userNum;
// return sqResult;
// }

// var userNum = +prompt("Enter any Number");
// numSquares(userNum);
// document.write(numSquares());

//--------------Chapter#35-38_(Q06)----------------

// function facNum(factorialNumber){
//     var facResult = 1;
//     for (var i = factorialNumber ; i > 0 ; i--){
//         facResult = i * facResult;
//     }
//     return facResult;
// }

// var factorialNumber = +prompt("Enter any number");
// document.write (factorialNumber, "!", " = ", facNum(factorialNumber));

//--------------Chapter#35-38_(Q07)----------------

// var startNum = +prompt("Enter your Start value")
// var endNum = +prompt("Enter your End value:")

// document.write("<b>", startNum, "</b>", ' to ',  "<b>", endNum, "</b>", " : ");
// countValue(startNum,endNum)

// function countValue(startNum,endNum) {
//     var countResult = startNum;
//     for (var i =  startNum ; i <= endNum ; i++){
//         document.write("<br/>", countResult);
//         if (countResult == endNum){
//             break;
//         }
//         else (countResult++)
//     }
// }

//--------------Chapter#35-38_(Q08)----------------

var baseNum = +prompt("Enter Base value");
var perpNum = +prompt("Enter Perpendicular value:");

var hypotenuseNum = 0;
function calculateHypotenuse(baseNum,perpNum){
    function square(){
        hypoNum = Math.pow(baseNum,2) + Math.pow(perpNum,2);
        return hypoNum;
    }
    hypotenuseNum = Math.sqrt(square());
    return hypotenuseNum;
    }

document.write("hypotenuse of a right angle triangle is: ",calculateHypotenuse(baseNum,perpNum));

//--------------Chapter#35-38_(Q09)----------------

// var recWidth = 2;
// var recHeight = 3;

// function areaOfRectangle(recWidth,recHeight){
//     var Area = recWidth * recHeight;
//     return Area;
// }

// document.write("Area of a Rectangle is: ", areaOfRectangle(recWidth,recHeight), )

//--------------Chapter#35-38_(Q10)----------------

// var strPalindrome = prompt("Enter any text?");

// function palindrome(strPalindrome){
// var revPalindrome = "";
//     for (var i = strPalindrome.length -1 ; i >= 0  ; i-- ) {
//         revPalindrome += strPalindrome[i]; 
//     }
//     if (strPalindrome == revPalindrome) {
//         return revPalindrome;
//     }
//     else {
//         return 0;
//     }
// }
// if (palindrome(strPalindrome) !== 0){
//     console.log("It is Palindrome!")
// }
// else (console.log("It is not Palindrome!"));

//--------------Chapter#35-38_(Q11)----------------

// var strName = "the quick brown fox";

// function sentenceCase(strName){
//   strName = strName.split(" ");
//   var newStrName = [];
    
//   for(var i = 0 ; i < strName.length ; i++){
//       newStrName.push(strName[i].charAt(0).toUpperCase() + strName[i].slice(1));
//   }
//   return newStrName.join(" ");
// }

// console.log(sentenceCase(strName));

//--------------Chapter#35-38_(Q12)----------------

// var strName = "Web Development Tutorial";

// function longestWord(strName){
//     strName = strName.split(" ");
//     var newStrName = strName[0];

//     for (var i = 1 ; i < strName.length ; i++){
//         if(newStrName.length < strName[i].length){
//         newStrName = strName[i];
//         } 
//     }
//     return newStrName; 
// }
// console.log(longestWord(strName));

//--------------Chapter#35-38_(Q13)----------------

// var strName = "JSResooooourceS.com";
// var userLetter = "o";

// function letterCount(strName, userLetter) 
// {
//  var charCount = 0;
//  for (var i = 0; i < strName.length; i++) 
//  {
//     if (strName.charAt(i) === userLetter) 
//       {
//       charCount ++;
//       }
//   }
//   return charCount;
// }

// console.log(letterCount(strName,userLetter));

//--------------Chapter#35-38_(Q14)----------------

// var radius1 = +prompt("Enter Radius of a Circle:")

// function calcCircumference(radius1){
//     var circleCircum = 2 * 3.142 * radius1;
//     return circleCircum;
// }

// function calcArea(radius1){
//     var circleArea = 3.142 * Math.pow(radius1,2);
//     return circleArea;
// }

// console.log("The circumference is ", calcCircumference(radius1))
// console.log("The area is ", calcArea(radius1))

//------Task #01------

// var passWord = "";
// var randomValues1 = "abcdefghijklmnopqrstuvwxyz";
// var randomValues2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var randomValues3 = "@#$!%^&*()-_+=]}[{;:'<>,.?/";
// for (var i = 0; i < 4; i++) {
//     var genPass = Math.floor(Math.random() * randomValues1.length);
//     passWord += randomValues1[genPass];
// }
// for (var i = 0; i < 4; i++) {
//     var genPass = Math.floor(Math.random() * randomValues2.length);
//     passWord += randomValues2[genPass];
// }
// for (var i = 0; i < 4; i++) {
//     var genPass = Math.floor(Math.random() * randomValues3.length);
//     passWord += randomValues3[genPass];
// }
// console.log(passWord);

//------Task #02------

// var ramadanStarts = new Date("11 March, 2024");
// var today = new Date();
// var diff = ramadanStarts.getTime() - today.getTime();
// document.write(Math.ceil(diff/1000/60/60/24), " Days are Remaining for Starting of Ramadan");

//------Task #03------

// var dateOfBirth = prompt("Enter your age: in MM DD YYYY") 
// var dOfBirth = new Date(dateOfBirth);
// var ageInYears = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
// var ageMonths = Math.abs((new Date().getMonth() - new Date(dateOfBirth).getMonth()));

// if (new Date().getMonth() >= new Date(dateOfBirth).getMonth()){
// console.log("You are ", ageInYears, " Year's and ", ageMonths, " Month old.");
// }
// else if(new Date().getMonth() < new Date(dateOfBirth).getMonth()) {
//      ageMonths = 12 - ageMonths;
//      console.log("You are ", ageInYears - 1, " Year's and ", ageMonths, " Month old.");
// }

//------Task #04------

// var arr = ["ghous", "zain", "ghous", "ali", "ali", "khan", "ali"]

// for (var i = 0 ; i < arr.length ; i++) {
//     for (var j = i + 1 ; j < arr.length ; j++) {
//         if (arr[i] === arr[j]) {
//             arr.splice(j,1);
//             j = j - 1;
//         }
//     }
// } 

// console.log(arr);

//------Task #05------

// var str = "5+5-";
// var newInput = "10";
// var lastNum = str[str.length -1];
// var arr = ["+", "-", "*", "/"];

// if (arr.indexOf(lastNum) !== -1 && arr.indexOf(newInput) !== -1){
//     str = str.slice(0,-1) + newInput;
// }
// else {
//     str += newInput;
// }

// console.log(str);

//------Task #06------

// var strName1 = prompt("Enter First Name");
// var strName2 = prompt("Enter Second Name");

// strName1 = strName1.split("").sort().join("");
// strName2 = strName2.split("").sort().join("");

// if(strName1 === strName2){
// console.log("Anagram");
// }
// else (console.log("Not an Anagram"));

//--------------Chapter#17-20_(Q01)----------------

// var arr = [[],[]];

//--------------Chapter#17-20_(Q02)----------------

// var arr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]
// for(i = 0; i < arr.length; i++){
//     for(j = 0; j < arr[i].length; j++){
//             document.write(arr[i][j]);
//     }
//     document.write("<br/>");
// }

//document.write(arr);

//--------------Chapter#17-20_(Q03)----------------

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0 ; i < 10 ; i++){
// document.write(arr[i]+"<br>");
// }

//--------------Chapter#17-20_(Q04)----------------

// var tableNumber = prompt("Enter a number to show is multiplication table: ");
// var tableLength = prompt("Enter length multiplication table: ");

// console.log("Multiplication table of " + tableNumber);
// console.log("Length " + tableLength);

// for (var i = 1 ; i <= tableLength ; i++){
//     console.log("Table === >", tableNumber + "X" + i + "=" + tableNumber * i);
// }

//--------------Chapter#17-20_(Q05)----------------

// var fruitsName = ["apple", "banana", "mango", "orange", "strawberry"]

// document.write(fruitsName);

// for (i = 0 ; i < fruitsName.length ; i++){
//     document.write("<br>Element at index ", i, " is ", fruitsName[i]);
// }

//--------------Chapter#17-20_(Q06)----------------

//a.

// document.write("<h1>Counting: </h1>");
// for (var i = 1 ; i <= 15 ; i++){
//     document.write(i, ", ");
// }

//b.

// document.write("<h1>Reverse counting: </h1>");
// for (var i = 10 ; i > 0 ; i--){
//     document.write(i, ", ");
// }

//c.
// var numSeries = [1, 2, 3, 4, 5 , 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var evenNum = [];

// for (var i = 0 ; i < numSeries.length ; i++){
//     if(i % 2 === 1){
//         evenNum.push(numSeries[i],);
//     }
// }
// document.write("<h1>Even: </h1>", evenNum);

//d.
// var numSeries = [1, 2, 3, 4, 5 , 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var oddNum = [];

// for (var i = 0 ; i < numSeries.length ; i++){
// if(i % 2 === 0){
//     oddNum.push(numSeries[i],);
//     }
// }
// document.write("<h1>Odd: </h1>", oddNum);

// //e.
// var numSeries = [1, 2, 3, 4, 5 , 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var evenNum = [];

// for (var i = 0 ; i < numSeries.length ; i++){
//     if(i % 2 === 1){
//         evenNum.push(numSeries[i] + "k" , );
//     }
// }
// document.write("<h1>Series: </h1>", evenNum);

//--------------Chapter#17-20_(Q07)----------------

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// var searchArr = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am?");
// var matchFound = false
// for (var i = 0; i < searchArr.length; i++) {
//         if (bakeryItems[i] === searchArr) {
//             matchFound = true;
//             alert(searchArr + " is available at index " + i + " in our bakery");
//             break;
//         } 
// }
// if (matchFound === false){
//     alert("We are sorry. " + searchArr + " is not available in our bakery")
// }

//--------------Chapter#17-20_(Q08)----------------

// var numArr = [24, 53, 78, 91, 12];
// var maxNumber = numArr[0];
// for (var i = 0 ; i < numArr.length ; i++){
//     if(numArr[i] > maxNumber){
//         maxNumber = numArr[i];
//     }
// }
// console.log("Array items: ", numArr)
// console.log("The largest number is ", maxNumber);

//--------------Chapter#17-20_(Q09)----------------

// var numArr = [24, 53, 78, 91, 12];
// var minNumber = numArr[0];
// for (var i = 0 ; i < numArr.length ; i++){
//     if(numArr[i] < minNumber){
//         minNumber = numArr[i];
//     }
// }
// console.log("Array items: ", numArr)
// console.log("The smallest number is ", minNumber);

//--------------Chapter#17-20_(Q10)----------------

// var numFive = 5;

// for (var i = 1 ; i <= 20 ; i++){
//     document.write(numFive * i, ", ");
// }

//--------------Chapter#21-25_(Q01)----------------

// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// fullName = firstName + " " + lastName;

// document.write("Assalam o alikum! " + fullName + " to SMIT");

//--------------Chapter#21-25_(Q02)----------------

// var mobileModel = prompt("Enter your favorite mobile phone model:");

// document.write("My favorite phone is: " + mobileModel + "<br/>Length of string: " + mobileModel.length);

//--------------Chapter#21-25_(Q03)----------------

// var countryCitizen = "Pakistani";

// document.write("String: " + countryCitizen + "<br/> Index of 'n': " + countryCitizen.indexOf("n"));

//--------------Chapter#21-25_(Q04)----------------

// var greetingString = "Hello World";

// document.write("String: " + greetingString + "<br/> Last Index of 'l': " + greetingString.lastIndexOf("l"));

//--------------Chapter#21-25_(Q05)----------------

// var countryCitizen = "Pakistani";

// document.write("String: " + countryCitizen + "<br/> Character at  Index 3: " + countryCitizen.charAt(3));

//--------------Chapter#21-25_(Q06)----------------

// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// fullName = firstName.concat(" ",  lastName);

// document.write("Assalam o alikum! ".concat(fullName, " to SMIT" ));

//--------------Chapter#21-25_(Q07)----------------

//  var cityName = "Hyderabad";

//  document.write("City: " + cityName + "<br/> After replacement: " + countryCitizen.indexOf("n"));

//--------------Chapter#21-25_(Q08)----------------

// var oldMessage = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(oldMessage, "<br/>");
// var newMessage = oldMessage.replace(/and/g, "&");
// document.write(newMessage);

//--------------Chapter#21-25_(Q09)----------------

// var strNum = "472";
// document.write("Value: ", strNum);
// document.write("<br/>type: ", typeof(strNum));
// strNum = Number(strNum);
// document.write("<br/>Value: ", strNum);
// document.write("<br/>type: ", typeof(strNum));

//--------------Chapter#21-25_(Q10)----------------

// var userInput = prompt("Enter any input:");
// var upCaseUserInput = userInput.toUpperCase();
// document.write("User input: ", userInput);
// document.write("<br/>Upper case: ", upCaseUserInput);

//--------------Chapter#21-25_(Q11)----------------

// var userInput = prompt("Enter any input:");
// var firstChar = userInput.slice(0,1).toUpperCase();
// var inputResult = firstChar + userInput.slice(1);
// document.write("User input: ", userInput);
// document.write("<br/>Title case: ", inputResult);

//--------------Chapter#21-25_(Q12)----------------

// var decimalNum = 35.36 ;
// document.write("Number: ", decimalNum);
// decimalNum = decimalNum.toString();
// decimalNum = decimalNum.replace(".","");
// document.write("<br/>Result: ", decimalNum);

//--------------Chapter#21-25_(Q13)----------------

// var userName = prompt ("Enter Username:");

// if(userName.indexOf(String.fromCharCode(33)) !== -1){
//     document.write("please Enter the valid username");
// }
// else if (userName.indexOf(String.fromCharCode(44)) !== -1){
//     document.write("please Enter the valid username");
// }
// else if (userName.indexOf(String.fromCharCode(46)) !== -1){
//     document.write("please Enter the valid username");
// }
// else if (userName.indexOf(String.fromCharCode(64)) !== -1){
//     document.write("please Enter the valid username");
// }

//--------------Chapter#21-25_(Q14)----------------

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var arraySearch = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am?");
// arraySearch = arraySearch.toLowerCase();
// var matchFound = false
// for (var i = 0; i < bakeryItems.length; i++) {
//         if (bakeryItems[i] === arraySearch) {
//             matchFound = true;
//             alert(arraySearch + " is available at index " + i + " in our bakery");
//             break;
//         } 
// }
// if (matchFound === false){
//     alert("We are sorry. " + arraySearch + " is not available in our bakery")
// }

//--------------Chapter#21-25_(Q15)----------------

// var userPassword = prompt("Enter your password:");
// var arr1 = [""];
// var arr2 = [""];
// var arr3 = [];
// for (var i = 0 ; i < 26 ; i++ ){
//     arr1[i] = String.fromCharCode(i + 65);
// }
// for (var i = 0 ; i < 26 ; i++ ){
//     arr2[i] = String.fromCharCode(i + 97);
// }
// for (var i = 0 ; i < 10 ; i++ ){
//     arr3[i] = String.fromCharCode(i + 48);
// }

// if(userPassword == arr1 && arr2 && arr3) {
//     document.write("Entered password: ", userPassword);
    
//     if (userPassword.charAt(0) > 0 ){
//         document.write("<br/>Password can not begin with number");
//         document.write("<br/>Please enter a valid password");
//     }
//     if (userPassword.length < 6){
//         document.write("<br/>Password length should be minimum 6 character");
//     }    
// }

//--------------Chapter#21-25_(Q16)----------------

// var uniName = "University of Karachi";
// var splitName = uniName.split("")
// for (var i = 0 ; i < uniName.length ; i++){
//     document.write(splitName[i],"<br/>");
//     }

//--------------Chapter#21-25_(Q17)----------------

// var userInput = prompt("Enter any word:");
// var lastChar = userInput.charAt(userInput.length -1);
// document.write("User input: ", userInput, "<br/>Last character of input: ", lastChar )

//--------------Chapter#21-25_(Q15)----------------

// var textString = ("The quick brown fox jumps over the lazy dog");
// textString = textString.toLowerCase();
// var textIndex = 0;
// for (var i = 0; i < textString.length; i++) {
//     if (textString.slice(i, i + 3) === "the") {
//         textIndex++;
//     }
// }
// document.write("Text: The quick brown fox jumps over the lazy dog <br/>There are ", textIndex, " occurrence(s) of word 'the'");

var passWord = "";
var randomValues= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
for (var i = 0; i < 4; i++) {
    var genPass = Math.floor(Math.random() * randomValues.length);
    passWord += randomValues[genPass];
}
console.log(passWord);

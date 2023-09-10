//--------------Chapter#26-30_(Q01)----------------

// var userInput = prompt("Enter any positive value in decimal:");
// document.write("Number: ", userInput, "<br/>","Round off value: ", Math.round(userInput), "<br/>", "Floor value: ", Math.floor(userInput), "<br/>", "Ceil value: ", Math.ceil(userInput));

//--------------Chapter#26-30_(Q02)----------------

// var userInput = prompt("Enter any negative value in decimal:");
// document.write("Number: ", userInput, "<br/>","Round off value: ", Math.round(userInput), "<br/>", "Floor value: ", Math.floor(userInput), "<br/>", "Ceil value: ", Math.ceil(userInput));

//--------------Chapter#26-30_(Q03)----------------

// var minusSign = +prompt("Enter any number:");
// var absoluteValue = minusSign;
// if(minusSign < 0){
//     absoluteValue = minusSign * (-1);
// }

// document.write("The absolute value of ", minusSign, " is ", absoluteValue);

//--------------Chapter#26-30_(Q04)----------------

// var diceNumber = "123456";
// var randomNumber = Math.ceil(Math.random() * diceNumber.length);
// document.write("Random dice value: ", randomNumber);

//--------------Chapter#26-30_(Q05)----------------

// var userHead = 0, userTail = 0;
// for(var i = 0 ; i < 3 ; i++){
// var numGame = Math.round(Math.random() * 1);
// if (numGame === 0){
//     userHead++
//     }
// else if(numGame === 1){
//     userTail++
//     }   
// }    
// document.write(userHead, "<br/>random coin value: <b>Head</b><br/>", userTail, "<br/>random coin value: <b>Tail</b>");

//--------------Chapter#26-30_(Q06)----------------

// for (var i = 0 ; i < 100 ; i++){
// var randomValues = Math.ceil(Math.random() * i);
// }
// document.write("Random number between 1 and 100: ", randomValues);

//--------------Chapter#26-30_(Q07)----------------

// var userWeight = prompt("Enter your weight in kilograms");
// userWeight = userWeight.toLowerCase();
// if (userWeight > 0){
//     document.write("The Weight of a User is ", userWeight, " kilograms")
// }
// for (var i = 0 ; i <= userWeight.length ; i++){
//     if(userWeight[i] === ("k" || "K")){
//         userWeight = userWeight.slice(0,i);
//         document.write("The Weight of a User is ", userWeight, " kilograms")
//         break;
//     }
// }

//--------------Chapter#26-30_(Q08)----------------

// for (var i = 0 ; i < 10 ; i++){
//     var randomValues = Math.ceil(Math.random() * i);
// }
// var userGuess = +prompt("Enter a number between 1 and 10")
// if(randomValues === userGuess){
//     document.write("Congratulations! Your Guess Matches with computer genarated random number");
// }
// else (document.write("Try Again!"));

//--------------Chapter#31-34_(Q01)----------------

// var currentDate = new Date();
// document.write(currentDate);

//--------------Chapter#31-34_(Q02)----------------

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth();
// document.write("Current month: ", monthName[currentMonth]);

//--------------Chapter#31-34_(Q03)----------------

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var todayDay = new Date().getDay();
// document.write("Today is: ", dayNames[todayDay]);

//--------------Chapter#31-34_(Q04)----------------

// var todayDay = new Date().getDay();
// if(todayDay > 5 || todayDay < 8){ 
// document.write("It's Fun day");
// }

//--------------Chapter#31-34_(Q05)----------------

// var todayDate = new Date().getDate();
// if(todayDate < 16 ){ 
// document.write("First fifteen days of the month");
// }
// else (document.write("Last days of the month"));

//--------------Chapter#31-34_(Q06)----------------

// var currentDate = new Date();
// document.write("Current Date: ", currentDate);
// document.write("<br/>Elapsed milliseconds since January 1, 1970: ", Date.now());
// document.write("<br/>Elapsed minutes since January 1, 1970: ", Date.now()/6000);

//--------------Chapter#31-34_(Q07)----------------

// var currentTime = new Date().getHours();
// if(currentTime < 12){
// document.write("It's AM");
// }
// else (document.write("It's PM"));

//--------------Chapter#31-34_(Q08)----------------

// var lastMonth = prompt("Enter Date in 'MM DD YYYY' Format")
// var laterDate = new Date(31+ lastMonth +2030 );
// document.write("Later date: ", laterDate);

//--------------Chapter#31-34_(Q09)----------------

// var ramadanStarts = new Date("18 June, 2015");
// var todayDate = new Date();
// var msDiff = todayDate.getTime() - ramadanStarts.getTime();
// document.write(Math.floor(msDiff/1000/60/60/24), " days have passed since 1st Ramadan, 2015");

//--------------Chapter#31-34_(Q10)----------------

// var beginningDate = new Date("01 Jan, 2023");
// console.log (beginningDate.getTime());
// var referenceDate = new Date();
// console.log (referenceDate.getTime());
// var diffBetweenTwo = referenceDate.getTime() - beginningDate.getTime();
// console.log(diffBetweenTwo);
// document.write("On reference date ", referenceDate, ", ", Math.round(diffBetweenTwo/1000), " seconds had passed since beginning of 2023");

//--------------Chapter#31-34_(Q11)----------------

// var previousDate = new Date();
// var currentDate = new Date();
// previousDate.setHours(new Date().getHours() - 1);
// document.write("Current date: ", currentDate, "<br/>1 hour ago, it was ", previousDate);

//--------------Chapter#31-34_(Q12)----------------

// var previousDate = new Date();
// var currentDate = new Date();
// previousDate.setFullYear(new Date().getFullYear() - 100);
// document.write("Current date: ", currentDate, "<br/>100 years back, it was ", previousDate);

//--------------Chapter#31-34_(Q13)----------------

// var userAge = prompt("Enter your Age");
// var birthYear = new Date().getFullYear() - userAge;
// document.write("Your age is ", userAge, "<br/>Your birth year is ", birthYear);

//--------------Chapter#31-34_(Q14)----------------

// var cName = prompt("Enter Customer Name:");
// var billingMonth = new Date().getMonth();
// var arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var numberOfUnits = +prompt("Enter Number of Units:");
// var chargesPerUnits = 16;
// var netAmountPayable = numberOfUnits * chargesPerUnits;
// var latePaymentSurcharge = 350;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write(
//     "<h1>K-Electric Bill</h1><br/>",
//     "Customer Name: <b>", cName, "</b><br/>",
//     "Month: <b>", arrMonth[billingMonth], "</b><br/>",
//     "Number of units : <b>", numberOfUnits.toFixed(2), "</b><br/>",
//     "Charges per unit: <b>", chargesPerUnits.toFixed(2), "</b><br/><br/>",
//     "Net Amount Payable (within Due Date): <b>", netAmountPayable.toFixed(2), "</b><br/>",
//     "Late Payment Surcharge: <b>", latePaymentSurcharge.toFixed(2), "</b><br/>",
//     "Gross Amount Payable (after Due Date): <b>", grossAmountPayable.toFixed(2), "</b>",
// )




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

//-----------------------------------

// //--------------Chapter#13-15_(Q01)----------------

// var studentNames = [];
// console.log(studentNames);

// //--------------Chapter#13-15_(Q02)----------------

// var studentNames = new Array();
// console.log(studentNames);

// //--------------Chapter#13-15_(Q03)----------------

// var studentNames = ["Monis", "Ahmed", "Thakur"];
// console.log(studentNames);

// //--------------Chapter#13-15_(Q04)----------------

// var serialNumber = [1, 2, 3];
// console.log(serialNumber);

// //--------------Chapter#13-15_(Q05)----------------

var abcArray = (true);
console.log(typeof abcArray);

// //--------------Chapter#13-15_(Q06)----------------

// var mixedArray = [1, "Bob", "Now is", true];
// console.log(typeof mixedArray);

// //--------------Chapter#13-15_(Q07)----------------

// var eduQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:<br><br>" + "1) " + eduQualifications[0] + "<br>2) " + eduQualifications[1] + "<br>3) " + eduQualifications[2] + "<br>4) " + eduQualifications[3] + "<br>5) " + eduQualifications[4] + "<br>6) " + eduQualifications[5] + "<br>7) " + eduQualifications[6] + "<br>8) " + eduQualifications[7] + "</h1>");

// //--------------Chapter#13-15_(Q08)----------------

// var studentNames = ["Monis", "Ahmed", "Thakur"];
// var obtMarks = [320, 230, 480];

// var stuPercentage = [];

// stuPercentage[0] = (obtMarks.slice(0, 1) / 500) * 100;
// stuPercentage[1] = (obtMarks.slice(1, 2) / 500) * 100;
// stuPercentage[2] = (obtMarks.slice(2, 3) / 500) * 100;
// console.log(stuPercentage);

// document.write("Score of " + studentNames[0] + " is " + obtMarks[0] + ". Percentage: " + stuPercentage[0] + "%" + "<br>Score of " + studentNames[1] + " is " + obtMarks[1] + ". Percentage: " + stuPercentage[1] + "%" + "<br>Score of " + studentNames[2] + " is " + obtMarks[2] + ". Percentage: " + stuPercentage[2] + "%");

// //--------------Chapter#13-15_(Q09)----------------

// var colorNames = ["red", "Green", "Blue"];

// document.write("<br><br><br>" + colorNames);

// // (a)
// colorNames.unshift(prompt("What color he/she wants to add to the beginning ?"));

// document.write("<br>" +  colorNames);

// // (b)
// colorNames.push(prompt("What color he/she wants to add to the end ?"));

// document.write("<br>" +  colorNames);

// // (c)
// colorNames.unshift("Black", "Gray");

// document.write("<br>" +  colorNames);

// // (d)
// colorNames.shift();

// document.write("<br>" +  colorNames);

// // (e)
// colorNames.pop();

// document.write("<br>" +  colorNames);

// // (f)
// colorNames.splice(prompt("Which index do you want to add a color ?"),0,prompt("Enter color name ?"));

// document.write("<br>" +  colorNames);

// // (g)
// colorNames.splice(prompt("Which index do you want to delete color(s)?"),prompt("Enter how many color do you want to delete?"));

// document.write("<br>" +  colorNames);

// //--------------Chapter#13-15_(Q10)----------------

// var stdScore = [320, 230, 480, 120];

// document.write("Scores of Students: " + stdScore);

// stdScore.sort();

// document.write("<br>Ordered Scores of Students: " + stdScore);


// //--------------Chapter#13-15_(Q11)----------------

// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

// document.write("<h1>Cities list: <br>" + cityNames + "<h1>");

// var selectedCities = cityNames.slice(1,4);

// document.write("<h1>Selected cities list: <br>" + selectedCities + "<h1>");

// //--------------Chapter#13-15_(Q12)----------------

// var arr = ["This ", "is ", "my ", " cat"];

// document.write("<h1>Array: <br>" + arr + "<h1>");

// document.write("<h1>String: <br>" + arr[0] + arr[1] + arr[2] + arr[3] + "<h1>");


// //--------------Chapter#13-15_(Q13)----------------

// var computerParts = [];
// computerParts.unshift(prompt("Enter any Computer Input / Output Device name?"));
// computerParts.unshift(prompt("Enter any Computer Input / Output Device name?"));
// computerParts.unshift(prompt("Enter any Computer Input / Output Device name?"));
// computerParts.unshift(prompt("Enter any Computer Input / Output Device name?"));
// console.log(computerParts);

// computerParts.pop();
// console.log(computerParts);
// computerParts.pop();
// console.log(computerParts);
// computerParts.pop();
// console.log(computerParts);
// computerParts.pop();
// console.log(computerParts);

////--------------Chapter#13-15_(Q14)----------------

// var computerParts = [];
// computerParts.push(prompt("Enter any Computer Input / Output Device name?"));
// computerParts.push(prompt("Enter any Computer Input / Output Device name?"));
// computerParts.push(prompt("Enter any Computer Input / Output Device name?"));
// computerParts.push(prompt("Enter any Computer Input / Output Device name?"));
// console.log(computerParts);

// computerParts.pop();
// console.log(computerParts);
// computerParts.pop();
// console.log(computerParts);
// computerParts.pop();
// console.log(computerParts);
// computerParts.pop();
// console.log(computerParts);

//// --------------Chapter#13-15_(Q15)----------------

var brandNames = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(
    "<select id = "+"dropdown"+"onchange = "+"selectOption"+"><option>" + brandNames[0] + "</option>" + "<option>" + brandNames[1] + "</option>" + "<option>" + brandNames[2] +  "</option>" + "<option>" + brandNames[3] + "</option>" + "<option>" + brandNames[4] + "</option>" + "<option>" + brandNames[5] + "</option></select>"
);
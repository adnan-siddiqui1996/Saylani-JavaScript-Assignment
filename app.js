// Chapter # 1 Qno 1
function assignment1Q1() {
    alert("Welcome to our Website");
}
// Chapter # 1 Qno 2
function assignment1Q2() {
    alert("Error! Please enter a valid password.");
}
// Chapter # 1 Qno 3
function assignment1Q3() {
    alert("Welcome to JS land...\nHappy Coding!");
}
// Chapter # 1 Qno 4
function assignment1Q4() {
    alert("Welcome to JS land...");
    alert("Happy Coding!");
}
// Chapter # 1 Qno 5
function assignment1Q5() {
    console.log("Hello... I can use JS through my web browser's console");
}


// Chapter # 2 Qno 1
var userName = "Adnan Ahmed Siddiqui";
function assignment2Q1() {
    alert("User Name = " + userName);
}
// Chapter # 2 Qno 2
var myName = "Adnan Ahmed Siddiqui";
function assignment2Q2() {
    alert("My Name = " + myName);
}
// Chapter # 2 Qno 3
var message;
message = "Hello World";
function assignment2Q3() {
    alert(message);
}
// Chapter # 2 Qno 4
var name, age, profession;
name = "Adnan Ahmed Siddiqui";
age = 24;
profession = "Certified Mobile Application Developer"
function assignment2Q4() {
    alert(name);
    alert(age + " years old");
    alert(profession);
}
// Chapter # 2 Qno 5
var food = "PIZZA";
function assignment2Q5() {
    alert(food + "\n" + food.slice(0, -1) + "\n" + food.slice(0, -2) + "\n" + food.slice(0, -3) + "\n" + food.slice(0, -4));
}
// Chapter # 2 Qno 6
var email = "adnanahmed.siddiqui1996@gmail.com";
function assignment2Q6() {
    alert("My email address is " + email);
}
// Chapter # 2 Qno 7
var book = "A smarter way to learn JavaScript";
function assignment2Q7() {
    alert("I am trying to learn from the book " + book);
}
// Chapter # 2 Qno 8
var htmlJS = "Yah! I can write HTML content through JavaScript";
function assignment2Q8() {
    document.write(htmlJS);
    document.write("</br>Press refresh to go home page");
}
// Chapter # 2 Qno 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
function assignment2Q9() {
    document.write(design);
    alert(design);
    document.write("</br>Press refresh to go home page");
}

// Chapter # 3 Qno 1
var age = 24;
function assignment3Q1() {
    alert("I am " + age + " years old");
}
// Chapter # 3 Qno 2
var visited = 0;
function assignment3Q2() {
    visited++;
    alert("You have visited this site " + visited + " times");
}
// Chapter # 3 Qno 3
var birthYear = 1996;
function assignment3Q3() {
    document.write("My birth year is " + birthYear + "</br>");
    document.write("Data type of my declared variable is number");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 3 Qno 4
var visitorName, productTitle, quantity;
visitorName = "Adnan Ahmed Siddiqui";
productTitle = "T-shirt";
quantity = 5;
function assignment3Q4() {
    document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");
    document.write("</br>Press refresh to go home page");
}

// Chapter # 4 Qno 1
var name= "Adnan Ahmed", age = 24, profession = "Programmer";
function assignment4Q1() {
    alert("Var1 Name = " + name + "\nVar2 Age = " + age + "\nVar3 Profession = " + profession);
}
// Chapter # 4 Qno 2
var webVisitor, $rose, _userName, page5, Game;
// var 100, alert, "name", @book, roll No;
function assignment4Q2() {
    alert("5 Legal Variable = webVisitor, $rose, _userName, page5, Game");
    alert("5 Illegal Variable = 100, alert, name, @book, roll No;");
}
// Chapter # 4 Qno 3
function assignment4Q3() {
    document.write("<h1>Rules for naming JS variables</h1></br></br>");
    document.write("<p>Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable</p>");
    document.write("<p>Variables must begin with a letter, $ and _. For example $name, _name or name</p>");
    document.write("<p>Variable names are case sensitive.</p>");
    document.write("<p> Variable names should not be JS keywords.</p>");
    document.write("</br>Press refresh to go home page");
}

// Chapter # 5 Qno 1
function assignment5Q1() {
    var numberOne = parseInt(prompt("Enter 1st Number:"));
    var numberTwo = parseInt(prompt("Enter 2nd Number:"));
    var result = numberOne + numberTwo;
    document.write("Sum of " + numberOne + " and " + numberTwo + " is " + result);
    document.write("</br>Press refresh to go home page");
}
// Chapter # 5 Qno 2
function assignment5Q2() {
    var numberOne = parseInt(prompt("Enter 1st Number:"));
    var numberTwo = parseInt(prompt("Enter 2nd Number:"));
    var subtract = numberOne - numberTwo;
    var multiply = numberOne * numberTwo;
    var division = numberOne / numberTwo;
    var modulus = numberOne % numberTwo;
    document.write("Subtract of " + numberOne + " and " + numberTwo + " is " + subtract + "</br>");
    document.write("Multiplication of " + numberOne + " and " + numberTwo + " is " + multiply + "</br>");
    document.write("Division of " + numberOne + " and " + numberTwo + " is " + division + "</br>");
    document.write("Modulus of " + numberOne + " and " + numberTwo + " is " + modulus + "</br>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 5 Qno 3
function assignment5Q3() {
    var var1;
    document.write("<p>Value after variable declaration is: " + var1 + "</p>");
    var1 = 5;
    document.write("<p>Initial value: " + var1 + "</p>");
    var1++;
    document.write("<p>Value after increment is: " + var1 + "</p>");
    var1 = var1 + 7;
    document.write("<p>Value after addition is: " + var1 + "</p>");
    var1--;
    document.write("<p>Value after decrement is: " + var1 + "</p>");
    var1 = var1 % 3;
    document.write("<p>The remainder is: " + var1 + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 4
function assignment5Q4() {
    var ticketCost = 600;
    var quantity = 5;
    var totalCost = ticketCost * quantity;
    document.write("<p>Total cost to buy " + quantity + " tickets to a movie is " + totalCost + "PKR</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 5
function assignment5Q5() {
    var tableNumber = parseInt(prompt("Enter Table Number:"));
    document.write("<p>" + tableNumber + " x 1 = " + tableNumber*1 + "</p>");
    document.write("<p>" + tableNumber + " x 2 = " + tableNumber*2 + "</p>");
    document.write("<p>" + tableNumber + " x 3 = " + tableNumber*3 + "</p>");
    document.write("<p>" + tableNumber + " x 4 = " + tableNumber*4 + "</p>");
    document.write("<p>" + tableNumber + " x 5 = " + tableNumber*5 + "</p>");
    document.write("<p>" + tableNumber + " x 6 = " + tableNumber*6 + "</p>");
    document.write("<p>" + tableNumber + " x 7 = " + tableNumber*7 + "</p>");
    document.write("<p>" + tableNumber + " x 8 = " + tableNumber*8 + "</p>");
    document.write("<p>" + tableNumber + " x 9 = " + tableNumber*9 + "</p>");
    document.write("<p>" + tableNumber + " x 10 = " + tableNumber*10 + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 6
function assignment5Q6() {
    var c = parseInt(prompt("Enter Celcius to convert into Fahrenheit"));
    var f = parseInt(prompt("Enter fahrenheit to convert into Celcius"));
    var fahrenheit = (c * 9 / 5) + 32;
    var celcius = (f - 32) * 5 / 9;
    document.write("<p>" + c + "<sup>0</sup>C is " + fahrenheit + "<sup>0</sup>F</p>");
    document.write("<p>" + f + "<sup>0</sup>F is " + celcius + "<sup>0</sup>C</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 7
var item1 = 650;
var item2 = 100;
var quatityOfItem1 = 3;
var quatityOfItem2 = 7;
var shippingCharges = 100;
var totalCost = (item1*quatityOfItem1) + (item2*quatityOfItem2) + shippingCharges;
function assignment5Q7() {
    document.write("<h1>Shopping Cart</h1></br>");
    document.write("<p>Price of item 1 is " + item1 + "</p>");
    document.write("<p>Quantity of item 1 is " + quatityOfItem1 + "</p>");
    document.write("<p>Price of item 2 is " + item2 + "</p>");
    document.write("<p>Quantity of item 2 is " + quatityOfItem2 + "</p>");
    document.write("<p>Shipping Charges " + shippingCharges + "</p></br>");
    document.write("<p>Total cost of your order is "+ totalCost + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 8
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks * 100) / totalMarks;
function assignment5Q8() {
    document.write("<h1>Marks Sheet</h1></br>");
    document.write("<p>Total marks: " + totalMarks + "</p>");
    document.write("<p>Marks obtained: " + obtainedMarks + "</p>");
    document.write("<p>Percentage: "+ percentage + "%</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 9
var totalDollars = 10;
var totalRiyals = 25;
var totalPkr = (totalDollars * 104.80) + (totalRiyals * 28);
function assignment5Q9() {
    document.write("<h1>Currency in PKR</h1></br>");
    document.write("<p>Total currency in PKR: "+ totalPkr + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 10
function assignment5Q10() {
    var number = parseInt(prompt("Enter a number: "));
    var result = ((number + 5) * 10) / 2;
    document.write("<p>The final Result is: "+ result + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 11
function assignment5Q11() {
    var currentYear = parseInt(prompt("Enter current year: "));
    var birthYear = parseInt(prompt("Enter birth year: "));
    var age = currentYear - birthYear;
    document.write("<h1>Age Calculator</h1></br>");
    document.write("<p>Current year: "+ currentYear + "</p>");
    document.write("<p>Birth year: "+ birthYear + "</p>");
    document.write("<p>Your age is: "+ age + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 12
function assignment5Q12() {
    var radius = parseInt(prompt("Enter radius of a circle: "));
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    var areaOfCircle = pi * (radius * radius);
    document.write("<h1>The Geometrizer</h1></br>");
    document.write("<p>Radius of a circle: "+ radius + "</p>");
    document.write("<p>The circumference is: "+ circumference + "</p>");
    document.write("<p>The area is: "+ areaOfCircle + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 13
function assignment5Q13() {
    var favouriteSnack = prompt("Enter your favourite snack: ");
    var currentAge = parseInt(prompt("Enter your current age: "));
    var perDaySnack = parseInt(prompt("Enter snack estimated amount per day: "));
    var maximumAge = 65;
    var remainingSnack = (maximumAge - currentAge) * perDaySnack;
    document.write("<h1>The Lifetime Supply Calculator</h1></br>");
    document.write("<p>Favourite Snack: "+ favouriteSnack + "</p>");
    document.write("<p>Current age: "+ currentAge + "</p>");
    document.write("<p>Estimated Maximum Age: "+ maximumAge + "</p>");
    document.write("<p>Amount of snacks per day: "+ perDaySnack + "</p>");
    document.write("<p>You will need "+ remainingSnack + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge + "</p>");
    document.write("Press refresh to go home page");
}

// Chapter # 6-9 Qno 1
function assignment6_9Q1() {
    var a = parseInt(prompt("Enter a number: "));
    document.write("<p>Result:</p>");
    document.write("<p>The value of a is: " + a + "</p>");
    document.write("<p>........................................ </p></br>");
    document.write("<p>The value of ++a is: " + ++a + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("<p>The value of a++ is: " + a++ + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("<p>The value of --a is: " + --a + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("<p>The value of a-- is: " + a-- + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 6-9 Qno 2
function assignment6_9Q2() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("<p>a is " + a + "</p>");
    document.write("<p>b is " + b + "</p>");
    document.write("<p>result is " + result + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 6-9 Qno 3
function assignment6_9Q3() {
    var userName = prompt("Enter your Name:");
    document.write("<p>Welcome to the Website " + userName + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 6-9 Qno 5
function assignment6_9Q5() {
    var tableNumber = parseInt(prompt("Enter table Number: ", 5));
    document.write("<p>" + tableNumber + "  x  1  =  " + tableNumber*1 + "</p>")
    document.write("<p>" + tableNumber + "  x  2  =  " + tableNumber*2 + "</p>")
    document.write("<p>" + tableNumber + "  x  3  =  " + tableNumber*3 + "</p>")
    document.write("<p>" + tableNumber + "  x  4  =  " + tableNumber*4 + "</p>")
    document.write("<p>" + tableNumber + "  x  5  =  " + tableNumber*5 + "</p>")
    document.write("<p>" + tableNumber + "  x  6  =  " + tableNumber*6 + "</p>")
    document.write("<p>" + tableNumber + "  x  7  =  " + tableNumber*7 + "</p>")
    document.write("<p>" + tableNumber + "  x  8  =  " + tableNumber*8 + "</p>")
    document.write("<p>" + tableNumber + "  x  9  =  " + tableNumber*9 + "</p>")
    document.write("<p>" + tableNumber + "  x  10  =  " + tableNumber*10 + "</p>")
    document.write("Press refresh to go home page");
}
// Chapter # 6-9 Qno 6
function assignment6_9Q6() {
    var subject1 = prompt("Enter 1st Subject Name: ");
    var subject2 = prompt("Enter 2nd Subject Name: ");
    var subject3 = prompt("Enter 3rd Subject Name: ");
    var maxMarkOfSubject = 100;
    var obtainedMarksSubject1 = parseInt(prompt("Enter Obtained Marks of " + subject1 + ": "));
    var obtainedMarksSubject2 = parseInt(prompt("Enter Obtained Marks of " + subject2 + ": "));
    var obtainedMarksSubject3 = parseInt(prompt("Enter Obtained Marks of " + subject3 + ": "));
    var totalMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
    var percentage = (totalMarks * 100) / (maxMarkOfSubject * 3);
    document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
    document.write("<tr><td>" + subject1 + "</td><td>" + maxMarkOfSubject + "</td><td>" + obtainedMarksSubject1 + "</td><td>" + (obtainedMarksSubject1 * 100)/maxMarkOfSubject + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + maxMarkOfSubject + "</td><td>" + obtainedMarksSubject2 + "</td><td>" + (obtainedMarksSubject2 * 100)/maxMarkOfSubject + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + maxMarkOfSubject + "</td><td>" + obtainedMarksSubject3 + "</td><td>" + (obtainedMarksSubject3 * 100)/maxMarkOfSubject + "%</td></tr>");
    document.write("<tr><td></td><td><b>" + (maxMarkOfSubject*3) + "</b></td><td><b>" + (obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3) + "</b></td><td><b>" + percentage + "%</b></td></tr></table>");
    document.write("Press refresh to go home page");
}

// Chapter # 9-11 Qno 1
function assignment9_11Q1() {
    var cityName = prompt("Enter a number: ");
    if(cityName === "Karachi" || cityName === "KARACHI" || cityName === "karachi") {
        document.write("<p>Welcome to City of Lights</p>");
    }
    else {
        document.write("<p>Welcome to " + cityName + "</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 2
function assignment9_11Q2() {
    var gender = prompt("Enter your gender (male/female): ");
    if(gender === "male" || gender === "MALE" || gender === "Male") {
        document.write("<p>Good Morning Sir</p>");
    }
    else if(gender === "female" || gender === "FEMALE" || gender === "Female") {
        document.write("<p>Good Morning Ma'am</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 3
function assignment9_11Q3() {
    var color = prompt("Enter Road Traffic Signal Color: ");
    if(color === "RED" || color === "Red" || color === "red") {
        document.write("<p>Must Stop</p>");
    }
    else if(color === "YELLOW" || color === "Yellow" || color === "yellow") {
        document.write("<p>Ready to move</p>");
    }
    else if(color === "GREEN" || color === "Green" || color === "green") {
        document.write("<p>Move now</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 4
function assignment9_11Q4() {
    var remainingFuel = parseFloat(prompt("Enter Remaining Fuel in Car (in litres): "));
    if(remainingFuel < 0.25) {
        document.write("<p>Please refill the fuel in your car</p>");
    }
    else{
        document.write("<p>No need to refill the fuel in your car right now</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 5
function assignment9_11Q5() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
        document.write("<p>given condition for variable a is true</p>");
    }
    else {
        alert("given condition for variable a is false");
        document.write("<p>given condition for variable a is false</p>");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
        document.write("<p>given condition for variable b is true</p>");
    }
    else {
        alert("given condition for variable b is false");
        document.write("<p>given condition for variable b is false</p>");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
        document.write("<p>condition 1 is true</p>");
    }
    else {
        alert("condition 1 is false");
        document.write("<p>condition 1 is false</p>");
    }
    if (c === 13) {
        alert("condition 2 is true");
        document.write("<p>condition 2 is true</p>");
    }
    else {
        alert("condition 2 is false");
        document.write("<p>condition 2 is false</p>");
    }
    if (++c < 14) {
        alert("condition 3 is true");
        document.write("<p>condition 3 is true</p>");
    }
    else {
        alert("condition 3 is false");
        document.write("<p>condition 3 is false</p>");
    }
    if(c === 14) {
        alert("condition 4 is true");
        document.write("<p>condition 4 is true</p>");
    }
    else {
        alert("condition 4 is false");
        document.write("<p>condition 4 is false</p>");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
        document.write("<p>The cost equals</p>");
    }
    else {
        alert("The cost are not equal");
        document.write("<p>The cost are not equal</p>");
    }
    if (true) {
        alert("True");
        document.write("<p>True</p>");
    }
    if (false) {
        alert("False");
        document.write("<p>False</p>");
    }
    if("car" < "cat") {
        alert("car is smaller than cat");
        document.write("<p>car is smaller than cat</p>");
    }
    else {
        alert("car is not smaller than cat");
        document.write("<p>car is not smaller than cat</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 6
function assignment9_11Q6() {
    var englishMarks = parseInt(prompt("Enter English Marks: "));
    var urduMarks = parseInt(prompt("Enter Urdu Marks: "));
    var mathsMarks = parseInt(prompt("Enter Maths Marks: "));
    var totalMarks1Subj = parseInt(prompt("Enter Total Marks of 1 subject: "));
    var totalMaxMarks = totalMarks1Subj * 3;
    var totalObtained = englishMarks + urduMarks + mathsMarks;
    var percentage = totalObtained * 100 / totalMaxMarks;
    var grade, remarks;
    document.write("<h2>Marks Sheet</h2>");
    document.write("</br><p>Total marks : " + totalMaxMarks + "</p>");
    document.write("<p>Marks obtained : " + totalObtained + "</p>");
    document.write("<p>Percentage : " + percentage + "</p>");

    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    }
    else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    }
    else if (percentage >= 60) {
        grade = "B";
        remarks = "You need improvement";
    }
    else if (percentage < 60) {
        grade = "Fail";
        remarks = "Sorry";
    }
    document.write("<p>Grade : " + grade + "</p>");
    document.write("<p>Remarks : " + remarks + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 7
function assignment9_11Q7() {
    var secretNumber = 7;
    var userGuess = parseInt(prompt("Guess the secret number(range 1-10): "));
    if(userGuess === secretNumber) {
        document.write("<p>Bingo! Correct answer</p>");
    }
    else if(userGuess === secretNumber+1 || userGuess === secretNumber-1) {
        document.write("<p>Close enough to the correct answer</p>");
    }
    else {
        document.write("<p>Wrong answer</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 8
function assignment9_11Q8() {
    var checkNumber = parseInt(prompt("Enter a number to check divisible by 3 or not: "));
    if(checkNumber % 3 === 0) {
        document.write("<p>Yes! the number is divisible by 3</p>");
    }
    else {
        document.write("<p>No! the number is not divisible by 3</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 9
function assignment9_11Q9() {
    var checkNumber = parseInt(prompt("Enter a number to check Even or Odd: "));
    if(checkNumber % 2 === 0) {
        document.write("<p>Even Number</p>");
    }
    else {
        document.write("<p>Odd Number</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 10
function assignment9_11Q10() {
    var temperature = parseInt(prompt("Enter Temperature: "));
    if(temperature > 40) {
        document.write("<p>It is too hot outside.</p>");
    }
    else if(temperature > 30) {
        document.write("<p>The Weather today is Normal.</p>");
    }
    else if(temperature > 20) {
        document.write("<p>Today's Weather is cool.</p>");
    }
    else if(temperature > 10) {
        document.write("<p>OMG! Today's weather is so Cool.</p>");
    }
    else {
        document.write("<p>Amazing Cold weather.</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 11
function assignment9_11Q11() {
    var firstNumber = parseInt(prompt("Enter first number: "));
    var secondNumber = parseInt(prompt("Enter second number: "));
    var result;
    var operator = prompt("Enter an operator (+, -, *, /, %): ");
    if(operator === "+") {
        result = firstNumber + secondNumber;
        document.write("<p>" + firstNumber + " + " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "-") {
        result = firstNumber - secondNumber;
        document.write("<p>" + firstNumber + " - " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "*") {
        result = firstNumber * secondNumber;
        document.write("<p>" + firstNumber + " * " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "/") {
        result = firstNumber / secondNumber;
        document.write("<p>" + firstNumber + " / " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "%") {
        result = firstNumber % secondNumber;
        document.write("<p>" + firstNumber + " % " + secondNumber + " = " + result + "</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 1
function assignment12_13Q1() {
    var checkCharacter = prompt("Enter Number or String: ");
    if(checkCharacter.charCodeAt(0) >= 65 && checkCharacter.charCodeAt(0) <= 90) {
        document.write("<p>Input is Uppercase Letter</p>");
    }
    else if(checkCharacter.charCodeAt(0) >= 97 && checkCharacter.charCodeAt(0) <= 122) {
        document.write("<p>Input is Lowercase Letter</p>");
    }
    else if(checkCharacter.charCodeAt(0) >= 48 && checkCharacter.charCodeAt(0) <= 57) {
        document.write("<p>Input is a Number</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 2
function assignment12_13Q2() {
    var intOne = parseInt(prompt("Enter first an Integer: "));
    var intTwo = parseInt(prompt("Enter second an Integer: "));
    if(intOne > intTwo) {
        document.write("<p>First integer " + intOne + " is larger</p>")
    }
    else if(intOne < intTwo) {
        document.write("<p>Second integer " + intTwo + " is larger</p>");
    }
    else if(intOne === intTwo) {
        document.write("<p>" + intOne + " and " + intTwo + " both are equal</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 3
function assignment12_13Q3() {
    var checkNumber = parseInt(prompt("Enter an integer number: "));
    if(checkNumber < 0) {
        document.write("<p>" + checkNumber + " is negative number</p>")
    }
    else if(checkNumber > 0) {
        document.write("<p>" + checkNumber + " is positive number</p>");
    }
    else if(checkNumber === 0) {
        document.write("<p>" + checkNumber + " is Zero</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 4
function assignment12_13Q4() {
    var checkCharacter = prompt("Enter an character to check vowel or not: ");
    if(checkCharacter === 'a' || checkCharacter === 'e' || checkCharacter === 'i' || checkCharacter === 'o' || checkCharacter === 'u') {
        document.write("<p>Character is vowel</p>")
    }
    else {
        document.write("<p>Character is not vowel</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 5
function assignment12_13Q5() {
    var originalPassword = "adnanAhmed";
    var userPassword = prompt("Enter the password: ");
    if(userPassword.length === 0) {
        document.write("<p>Please enter your password</p>");
    }
    else if(userPassword === originalPassword){
        document.write("<p>“Correct! The password you entered matches the original password</p>");
    }
    else {
        document.write("<p>Incorrect password</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 6
function assignment12_13Q6() {
    var greeting;
    var hours = parseInt(prompt("Enter the hour: "));
    if(hours < 18) {
        greeting = "Good Day";
    }
    else {
        greeting = "Good Evening";
    }
    document.write("<p>" + greeting + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 7
function assignment12_13Q7() {
    var greeting;
    var hours = parseInt(prompt("Enter the hour: "));
    if(hours >= 0000 && hours < 1200) {
        greeting = "Good Morning!";
    }
    else if(hours >= 1200 && hours < 1700) {
        greeting = "Good Afternoon!";
    }
    else if(hours >= 1700 && hours < 2100) {
        greeting = "Good Evening!";
    }
    else if(hours >= 2100 && hours <= 2359) {
        greeting = "Good Night!";
    }
    document.write("<p>" + greeting + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 1
function assignment14_16Q1() {
    var studentNames = [];
    alert("var studentNames = [];");
}
// Chapter # 14-16 Qno 2
function assignment14_16Q2() {
    var studentNames = [];
    alert("var studentNames = [];");
}
// Chapter # 14-16 Qno 3
function assignment14_16Q3() {
    var studentNames = ["Adnan", "Talha", "Ali", "Raza"];
    document.write("<p>1. studentNames[0]: " + studentNames[0] + "</p>");
    document.write("<p>2. studentNames[1]: " + studentNames[1] + "</p>");
    document.write("<p>3. studentNames[2]: " + studentNames[2] + "</p>");
    document.write("<p>4. studentNames[3]: " + studentNames[3] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 4
function assignment14_16Q4() {
    var numbersArray = [100, 80, 60, 40, 20];
    document.write("<p>1. numbersArray[0]: " + numbersArray[0] + "</p>");
    document.write("<p>2. numbersArray[1]: " + numbersArray[1] + "</p>");
    document.write("<p>3. numbersArray[2]: " + numbersArray[2] + "</p>");
    document.write("<p>4. numbersArray[3]: " + numbersArray[3] + "</p>");
    document.write("<p>5. numbersArray[4]: " + numbersArray[4] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 5
function assignment14_16Q5() {
    var booleanArray = [true, false];
    document.write("<p>1. booleanArray[0]: " + booleanArray[0] + "</p>");
    document.write("<p>2. booleanArray[1]: " + booleanArray[1] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 6
function assignment14_16Q6() {
    var mixedArray = ["Adnan", "Talha", "Ali", "Raza", 100, 80, 60, 40, 20, true, false];
    document.write("<p>1. mixedArray[0]: " + mixedArray[0] + "</p>");
    document.write("<p>2. mixedArray[1]: " + mixedArray[1] + "</p>");
    document.write("<p>3. mixedArray[2]: " + mixedArray[2] + "</p>");
    document.write("<p>4. mixedArray[3]: " + mixedArray[3] + "</p>");
    document.write("<p>5. mixedArray[4]: " + mixedArray[4] + "</p>");
    document.write("<p>6. mixedArray[5]: " + mixedArray[5] + "</p>");
    document.write("<p>7. mixedArray[6]: " + mixedArray[6] + "</p>");
    document.write("<p>8. mixedArray[7]: " + mixedArray[7] + "</p>");
    document.write("<p>9. mixedArray[8]: " + mixedArray[8] + "</p>");
    document.write("<p>10. mixedArray[9]: " + mixedArray[9] + "</p>");
    document.write("<p>11. mixedArray[10]: " + mixedArray[10] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 7
function assignment14_16Q7() {
    var qualificationa = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    document.write("<h2>Qualifications:</h2>")
    document.write("<p>1. " + qualificationa[0] + "</p>");
    document.write("<p>2. " + qualificationa[1] + "</p>");
    document.write("<p>3. " + qualificationa[2] + "</p>");
    document.write("<p>4. " + qualificationa[3] + "</p>");
    document.write("<p>5. " + qualificationa[4] + "</p>");
    document.write("<p>6. " + qualificationa[5] + "</p>");
    document.write("<p>7. " + qualificationa[6] + "</p>");
    document.write("<p>8. " + qualificationa[7] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 8
function assignment14_16Q8() {
    var studentNames = [];
    studentNames[0] = prompt("Enter 1st Student Name: ");
    studentNames[1] = prompt("Enter 2nd Student Name: ");
    studentNames[2] = prompt("Enter 3rd Student Name: ");
    var studentScores = [];
    studentScores[0] = parseInt(prompt("Enter 1st Student Score: "));
    studentScores[1] = parseInt(prompt("Enter 2nd Student Score: "));
    studentScores[2] = parseInt(prompt("Enter 3rd Student Score: "));
    var totalMarks = 500;
    document.write("<h2>Student Data:</h2>")
    document.write("<p>Score of " + studentNames[0] + " is "+ studentScores[0] + ". Percentage: " + (studentScores[0] * 100 / totalMarks) + "%</p>");
    document.write("<p>Score of " + studentNames[1] + " is "+ studentScores[1] + ". Percentage: " + (studentScores[1] * 100 / totalMarks) + "%</p>");
    document.write("<p>Score of " + studentNames[2] + " is "+ studentScores[2] + ". Percentage: " + (studentScores[2] * 100 / totalMarks) + "%</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 9
var colorNames = ["Red", "Yellow", "Green", "Blue"];
function assignment14_16Q9() {
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='beginningColor(colorNames)'>Update beginning color</button>");
}
function beginningColor(colorNames) {
    var userColor = prompt("What color you want to add on the beginning?");
    colorNames[0] = userColor; 
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='endColor(colorNames)'>Update last color</button>");
}
function endColor(colorNames) {
    var userColor = prompt("What color you want to add at the last?");
    var last = colorNames.length - 1;
    colorNames[last] = userColor;
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='addTwoColor(colorNames)'>Add two colors on the beginning color</button>");
}
function addTwoColor(colorNames) {
    var firstColor = prompt("1st Color?");
    var secondColor = prompt("2nd Color?");
    colorNames.unshift(firstColor, secondColor);
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='deleteBeginning(colorNames)'>Delete beginning color</button>");
}
function deleteBeginning(colorNames) {
    colorNames.shift();
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='deleteEnd(colorNames)'>Delete last color</button>");
}
function deleteEnd(colorNames) {
    colorNames.pop();
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='addOnDesiredPlace(colorNames)'>Add color on desired location</button>");
}
function addOnDesiredPlace(colorNames) {
    var index = parseInt(prompt("Enter index where you want to add color"));
    var colorName = prompt("Enter color Name?");
    colorNames.splice(index, 1, colorName);
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='deleteOnDesiredPlace(colorNames)'>Add color on desired location</button>");
}
function deleteOnDesiredPlace(colorNames) {
    var index = parseInt(prompt("Enter index what color you want to delete"));
    var deleteAmount = parseInt(prompt("Enter how many colors you want to delete"));
    colorNames.splice(index, deleteAmount);
    document.write("<p>" + colorNames + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 10
function assignment14_16Q10() {
    var studentMarks = [320, 230, 480, 120];
    document.write("<h2>Student Data:</h2>")
    document.write("<p>Scores of Students: " + studentMarks + "</p>");
    var sortedMarks = studentMarks.sort(function(a, b) {return a - b});
    document.write("<p>Ordered Scores of Students: " + sortedMarks + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 11
function assignment14_16Q11() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var selected = [];
    selected.push(cities[1], cities[2], cities[3]); 
    document.write("<h2>Cities List:</h2>")
    document.write("<p>" + cities + "</p>");
    document.write("<h2>Selected cities List:</h2>")
    document.write("<p>" + selected + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 12
function assignment14_16Q12() {
    var arr = ["This", "is", "my", "cat"];
    var string = arr.join(" "); 
    document.write("<h2>Array:</h2>")
    document.write("<p>" + arr + "</p>");
    document.write("<h2>String:</h2>")
    document.write("<p>" + string + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 13
var fifoArray = [];
function assignment14_16Q13() {
    document.write("<p>First In First Out (FIFO)</p>");
    document.write("<button onclick='pushFunction(fifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(fifoArray)'>Pop</button>");
}
function pushFunction(fifoArray) {
    var userInput = prompt("User Input: ");
    fifoArray.push(userInput);
    document.write("<p>" + fifoArray + "</p>");
    document.write("<button onclick='pushFunction(fifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(fifoArray)'>Pop</button>");
}
function popFunction(fifoArray) {
    var tempVar;
    if (fifoArray.length != 0) {
        tempVar = fifoArray[0];
        fifoArray.shift();
        document.write("<p>Out: </p>");
        document.write("<p>" + tempVar + "</p>");   
    }
    else {
        document.write("<p>This is an empty array. It can't pop</p>")
        document.write("</br>Press refresh to go home page</br>");
    }
    document.write("<button onclick='pushFunction(fifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(fifoArray)'>Pop</button>");
}
// Chapter # 14-16 Qno 14
var lifoArray = [];
function assignment14_16Q14() {
    document.write("<p>Last In First Out (LIFO)</p>");
    document.write("<button onclick='pushFunction(lifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(lifoArray)'>Pop</button>");
}
function pushFunction(lifoArray) {
    var userInput = prompt("User Input: ");
    lifoArray.push(userInput);
    document.write("<p>" + lifoArray + "</p>");
    document.write("<button onclick='pushFunction(lifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(lifoArray)'>Pop</button>");
}
function popFunction(lifoArray) {
    var tempVar;
    if (lifoArray.length != 0) {
        tempVar = lifoArray[lifoArray.length - 1];
        lifoArray.pop();
        document.write("<p>Out: </p>");
        document.write("<p>" + tempVar + "</p>");   
    }
    else {
        document.write("<p>This is an empty array. It can't pop</p>");
        document.write("</br>Press refresh to go home page</br>");
    }
    document.write("<button onclick='pushFunction(lifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(lifoArray)'>Pop</button>");
}
// Chapter # 14-16 Qno 15
function assignment14_16Q15() {
    var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier", "Others"];
    document.write("<h2>Select Your Mobile Company</h2>");;
    document.write("<select>");
        for (var i = 0; i < manufacturers.length; i++) {
            document.write("<option>" + manufacturers[i] + "</option>");
        }
    document.write("</select>");
    document.write("</br></br></br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 1
function assignment17_20Q1() {
    alert("Open Console.log");
    var multiDimensionArr = [ [10, 11, 12],
                              [13, 14, 15],
                              [16, 17, 18]
    ];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            console.log(multiDimensionArr[i][j]);
        }
    }
}
// Chapter # 17-20 Qno 2
function assignment17_20Q2() {
    var multiDimensionArr = [ 
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
    document.write("<h2>Multi-Dimension Array</h2>");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            document.write(multiDimensionArr[i][j] + "&nbsp;");
        }
        document.write("</br>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 3
function assignment17_20Q3() {
    document.write("<h2>Numeric counting from 1 to 10</h2>");
    for (var i = 0; i <= 10; i++) {
        document.write("<p>" + i + "</p>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 4
function assignment17_20Q4() {
    var tableNumber = parseInt(prompt("Enter a number to show its multiplication table: "));
    var tableLength = parseInt(prompt("Enter length multiplication table: "));
    document.write("<h2>Table Print</h2>");
    document.write("<h3>Multiplication table of " + tableNumber + "</h3>");
    document.write("<h3>Length " + tableLength + "</h3>");
    for (var i = 1; i <= tableLength; i++) {
        document.write("<p>" + tableNumber + "&nbsp; &nbsp; x &nbsp; &nbsp;" + i + "&nbsp; &nbsp; = &nbsp; &nbsp;" + (tableNumber*i) + "</p>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 5
function assignment17_20Q5() {
    var fruitNames = ["apple", "banana", "mango", "orange", "strawberry"];
    document.write("<h2>Fruit Names</h2>");
    for (var i = 0; i < fruitNames.length; i++) {
        document.write("<p>" + fruitNames[i] + "</p>");
    }
    document.write("</br></br>");
    for (var j = 0; j < fruitNames.length; j++) {
        document.write("<p>Element at index " + j + " is " + fruitNames[j] + "</p>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 6
function assignment17_20Q6() {
    document.write("<h2>Counting:</h2>");
    for (var i = 1; i <= 15; i++) {
        document.write(i + ", ");
    }
    document.write("</br>");
    document.write("<h2>Reverse counting:</h2>");
    for (var i = 10; i >= 1; i--) {
        document.write(i + ", ");
    }
    document.write("</br>");
    document.write("<h2>Even:</h2>");
    for (var i = 0; i <= 20; i++) {
        document.write(i + ", ");
        i++;
    }
    document.write("</br>");
    document.write("<h2>Odd:</h2>");
    for (var i = 1; i <= 20; i++) {
        document.write(i + ", ");
        i++;
    }   
    document.write("</br>");
    document.write("<h2>Series:</h2>");
    for (var i = 2; i <= 20; i++) {
        document.write(i + "k, ");
        i++;
    }   
    document.write("</br></br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 7
function assignment17_20Q7() {
    var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    var pointer = false;
    document.write("<h2>ABC BAKERY</h2>");
    for (var i = 0; i < bakeryItems.length; i++) {
        if (userInput === bakeryItems[i]) {
            pointer = true;
            break;
        }
    }
    if (pointer === true) {
        document.write("<p>" + userInput + " is <b>available</b> at index " + i + " in our bakery" + "</p>");
    }
    else {
        document.write("<p>We are sorry, " + userInput + " is <b>not available</b> in our bakery" + "</p>")
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 8
function assignment17_20Q8() {
    var numbersArr = [24, 53, 78, 91, 12];
    var temp = numbersArr[0];
    document.write("<p>Array items: " + numbersArr + "</p>");
    for (var i = 0; i < numbersArr.length; i++) {
        if (temp < numbersArr[i]) {
            temp = numbersArr[i];
            i = 0;
        }
    }
    document.write("<p>The largest number is " + temp + "</p>");
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 9
function assignment17_20Q9() {
    var numbersArr = [24, 53, 78, 91, 12];
    var temp = numbersArr[0];
    document.write("<p>Array items: " + numbersArr + "</p>");
    for (var i = 0; i < numbersArr.length; i++) {
        if (temp > numbersArr[i]) {
            temp = numbersArr[i];
            i = 0;
        }
    }
    document.write("<p>The smallest number is " + temp + "</p>");
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 10
function assignment17_20Q10() {
    var multiple = 5;
    var ans = 1
    for (var i = 1; i <= 100; i++) {
        ans = multiple * i;
        if (ans > 100) {
            break;
        }
        document.write(ans + ", ");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 21-25 Qno 1
function assignment21_25Q1() {
    var firstName = prompt("Enter First Name: ");
    var lastName = prompt("Enter Last Name: ");
    var firstNameChar = firstName.charAt(0);
    var firstNameRemaining = firstName.slice(1, firstName.length);
    firstName = firstNameChar.toUpperCase() + firstNameRemaining.toLowerCase();
    var lastNameChar = lastName.charAt(0);
    var lastNameRemaining = lastName.slice(1, lastName.length);
    lastName = lastNameChar.toUpperCase() + lastNameRemaining.toLowerCase();
    var fullName = firstName + " " + lastName;
    document.write("<p>Good Morning " + fullName + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 2
function assignment21_25Q2() {
    var modelNumber = prompt("Enter your favourite mobile model number: ");
    document.write("<p>My favourite phone is: " + modelNumber + "</p>");
    document.write("<p>Length of string: " + modelNumber.length + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 3
function assignment21_25Q3() {
    var str = "Pakistani";
    var find = str.indexOf("n");
    document.write("<p>String: " + str + "</p>");
    document.write("<p>Index of 'n': " + find + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 4
function assignment21_25Q4() {
    var str = "Hello World";
    var find = str.lastIndexOf("l")
    document.write("<p>String: " + str + "</p>");
    document.write("<p>Last Index of 'l': " + find + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 5
function assignment21_25Q5() {
    var str = "Pakistani";
    var find = str.charAt(3)
    document.write("<p>String: " + str + "</p>");
    document.write("<p>Character at index 3: " + find + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 6
function assignment21_25Q6() {
    var firstName = prompt("Enter First Name: ");
    var lastName = prompt("Enter Last Name: ");
    var firstNameChar = firstName.charAt(0);
    var firstNameRemaining = firstName.slice(1, firstName.length);
    firstName = firstNameChar.toUpperCase() + firstNameRemaining.toLowerCase();
    firstName = firstName + " ";
    var lastNameChar = lastName.charAt(0);
    var lastNameRemaining = lastName.slice(1, lastName.length);
    lastName = lastNameChar.toUpperCase() + lastNameRemaining.toLowerCase();
    // var fullName = firstName + " " + lastName;
    document.write("<p>Good Morning " + firstName.concat(lastName) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 7
function assignment21_25Q7() {
    var city = "Hyderabad";
    var replacement = city.replace("Hyderabad", "Islamabad");
    document.write("<p>City: " + city + "</p>");
    document.write("<p>After replacement: " + replacement + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 8
function assignment21_25Q8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var replacement = message.replace(/and/g, "&");
    document.write("<p>Message: " + message + "</p>");
    document.write("<p>After replacement: " + replacement + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 9
function assignment21_25Q9  () {
    var value = "472";
    document.write("<p>Value: " + value + "</p>");
    document.write("<p>Type: " + typeof(value) + "</p>");
    value = parseInt(value);
    document.write("<p>Value: " + value + "</p>");
    document.write("<p>Type: " + typeof(value) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 10
function assignment21_25Q10() {
    var userInput = prompt("User Input to capitalize string: ");
    var capitalize = userInput.toUpperCase();
    document.write("<p>User Input: " + userInput + "</p>");
    document.write("<p>Upper Case: " + capitalize + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 11
function assignment21_25Q11() {
    var userInput = prompt("User Input for title case: ");
    var userInputChr = userInput.charAt(0);
    var userInputRem = userInput.slice(1);
    var titleCase = userInputChr.toUpperCase() + userInputRem.toLowerCase();
    document.write("<p>User Input: " + userInput + "</p>");
    document.write("<p>Upper Case: " + titleCase + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 12
function assignment21_25Q12() {
    var number = 35.36;
    var str = number.toString();
    var result = str.replace(".", "");
    document.write("<p>number: " + number + "</p>");
    document.write("<p>Result: " + result + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 13
function assignment21_25Q13() {
    var userInput = prompt("Enter username: ");
    var flag = true;
    for (var i = 0; i < userInput.length; i++) {
        if (userInput.charCodeAt(i) === 33 || userInput.charCodeAt(i) === 44 || userInput.charCodeAt(i) === 46 || userInput.charCodeAt(i) === 64) {
            flag = false;
            break;
        }
    }
    if (flag === false) {
        alert("Please enter a valid username");
    }
    else {
        alert("Username is correct!");
    }
    document.write("<p>" + userInput + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 14
function assignment21_25Q14() {
    var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userSearch = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
    userSearch = userSearch.toLowerCase();
    var flag = false;
    var temp = 0;
    for (var i = 0; i < bakeryItems.length; i++) {
        if (bakeryItems[i] === userSearch) {
            flag = true;
            temp = i;
            break;            
        }
    }
    if (flag === true) {
        document.write("<p>" + userSearch + " is <b>available</b> at index " + temp + " in our bakery</p>");
    }
    else {
        document.write("<p>We are sorry " + userSearch + " is <b>not available</b> in our bakery</p>");
    }


    document.write("<p>number: " + number + "</p>");
    document.write("<p>Result: " + result + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 15
function assignment21_25Q15() {
    var password = prompt("Enter password: ");
    var flag = false;
    document.write("<p>Entered password: " + password + "</p>");
    for (var i = 0; i < password.length; i++) {
        if ( (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) || (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) ) {
            if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
                document.write("<p>Invalid password. It should not start with a number</p>");
                break;                
            }
            else {
                if(password.length > 5) {
                    flag = true;
                }
                else {
                    document.write("<p>Invalid password word. It must at least 6 characters long</p>");
                    break;
                }
            }
        }
        else {
            document.write("<p>Invalid password. Password must be a-z, A-Z & 0-9</p>");
            break;
        }
    }
    if (flag === true) {
        document.write("<p>Password is correct! Welcome Sir/ Ma'am");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 16
function assignment21_25Q16() {
    var university = "University of Karachi";
    var arr = university.split("");
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        document.write("<p>" + arr.shift(i) + "</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 17
function assignment21_25Q17() {
    var userInput = prompt("User Input: ");
    var lastChar = userInput.charAt(userInput.length - 1);
    document.write("<p>User Input: " + userInput + "</p>");
    document.write("<p>Last Character of Input: " + lastChar + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 21-25 Qno 18
function assignment21_25Q18() {
    var text = "The quick brown fox jumps over the lazy dog";
    var textArr = text.split(" ");
    var tempThe = 0;
    for (var i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i].toLowerCase();
    }

    for (var j = 0; j < textArr.length; j++) {
        if (textArr[j] === "the") {
            tempThe++;            
        }
    }
    document.write("<p>User Input: " + text + "</p>");
    document.write("<p>There are " + tempThe + " occurrence(s) of word 'the'</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}

// Chapter # 26-30 Qno 1
function assignment26_30Q1() {
    var userInput = parseFloat(prompt("Enter positive integer number: "));
    document.write("<p>Number: " + userInput + "</p>");
    document.write("<p>Round off value: " + Math.round(userInput) + "</p>");
    document.write("<p>Floor value: " + Math.floor(userInput) + "</p>");
    document.write("<p>Ceil value: " + Math.ceil(userInput) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 2
function assignment26_30Q2() {
    var userInput = parseFloat(prompt("Enter negative floating point number: "));
    document.write("<p>Number: " + userInput + "</p>");
    document.write("<p>Round off value: " + Math.round(userInput) + "</p>");
    document.write("<p>Floor value: " + Math.floor(userInput) + "</p>");
    document.write("<p>Ceil value: " + Math.ceil(userInput) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 3
function assignment26_30Q3() {
    var userInput = parseFloat(prompt("Enter an integer number: "));
    var absolute = Math.abs(userInput);
    document.write("<p>The absolute value of " + userInput + " is " + absolute + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 4
function assignment26_30Q4() {
    var randomDice = Math.random();
    randomDice = (randomDice * 6) + 1;
    randomDice = Math.floor(randomDice);
    document.write("<p>Random dice value: <b>" + randomDice + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 5
function assignment26_30Q5() {
    var randomDice = Math.random();
    randomDice = (randomDice * 2) + 1;
    randomDice = Math.floor(randomDice);
    document.write("<p>" + randomDice + "</p>");
    if (randomDice === 1) {
        document.write("<p>Random coin value: Heads</p>");
    }
    else {
        document.write("<p>Random coin value: Tails</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 6
function assignment26_30Q6() {
    var randomNum = Math.random();
    randomNum = (randomNum * 100) + 1;
    randomNum = Math.floor(randomNum);
    document.write("<p>Random number between 1 and 100: <b>" + randomNum + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 7
function assignment26_30Q7() {
    var userWeight = parseFloat(prompt("Enter your weight in Kilograms"));
    document.write("<p>The weight of user is <b>" + userWeight + "</b> kilograms</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 26-30 Qno 8
function assignment26_30Q8() {
    var randomNum = Math.random();
    randomNum = (randomNum * 10) + 1;
    randomNum = Math.floor(randomNum);
    var userGuess = parseInt(prompt("Enter a number between 1 to 10"));
    if (randomNum === userGuess) {
        document.write("<p>Correct answer! Contragulate the user</p>"); 
    }
    else {
        document.write("<p>Incorrect answer! Try again</p>"); 
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}

// Chapter # 31-34 Qno 1
function assignment31_34Q1() {
    var currentDate = new Date();
    document.write("<p>" + currentDate + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 2
function assignment31_34Q2() {
    var monthName = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    alert("Current month: " + monthName[currentMonth]);
    document.write("<p>Current month: " + monthName[currentMonth] + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 3
function assignment31_34Q3() {
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
    var currentDay = new Date();
    var currentDayName = currentDay.getDay();
    alert("Today is " + dayName[currentDayName]);
    document.write("<p>Today is " + dayName[currentDayName] + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 4
function assignment31_34Q4() {
    var currentDay = new Date();
    var currentDayName = currentDay.getDay();
    if (currentDayName === 0 || currentDayName === 6) {
        document.write("<p>It's fun day</p>");
    }
    else {
        document.write("<p>It's working day</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 5
function assignment31_34Q5() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    if (currentDay <= 16) {
        document.write("<p>First fifteen days of the month</p>");
    }
    else {
        document.write("<p>Last days of the month</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 6
function assignment31_34Q6() {
    var currentDate = new Date();
    var miliSeconds = currentDate.getTime();
    var minutes = miliSeconds/60000;
    document.write("<p>Current Date: <b>" + currentDate + "</b></p>");
    document.write("<p>Elapsed milliseconds since January 1, 1970: <b>" + miliSeconds + "</b></p>");
    document.write("<p>Elapsed minute since January 1, 1970: <b>" + minutes + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 7
function assignment31_34Q7() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    if (hours < 12) {
        alert("It's AM");
        document.write("<p><b> It's AM </b></p>");
    }
    else {
        alert("It's PM");
        document.write("<p><b> It's PM </b></p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 8
function assignment31_34Q8() {
    var laterDate = new Date();
    laterDate.setFullYear(2020);
    laterDate.setMonth(11);
    laterDate.setDate(31);
    laterDate.setHours(0);
    laterDate.setMinutes(0);
    laterDate.setSeconds(0);
    document.write("<p>Later date: <b>" + laterDate + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 9
function assignment31_34Q9() {
    var Current = new Date();
    var ramadan2020 = new Date();
    ramadan2020.setFullYear(2020);
    ramadan2020.setMonth(3);
    ramadan2020.setDate(24);
    var diff = (Current.getTime() - ramadan2020.getTime()) / 86400000;
    document.write("<p><b>" + diff + "</b> days have passed since 1st Ramadan, 2020</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 10
function assignment31_34Q10() {
    var referenceDate = new Date();
    var elapsedDate = new Date();
    elapsedDate.setFullYear(2020);
    elapsedDate.setMonth(0);
    elapsedDate.setDate(1);
    elapsedDate.setHours(0);
    elapsedDate.setMinutes(0);
    elapsedDate.setSeconds(0);
    var diff = (referenceDate.getTime() - elapsedDate.getTime()) / 1000;
    document.write("<p>On reference date <b>" + referenceDate + "</b>,</p>");
    document.write("<p><b>" + diff + "</b> seconds had passed since beginning of 2020</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 11
function assignment31_34Q11() {
    var current = new Date();
    var ahead = current.getHours();
    document.write("<p>Current date: <b>" + current + "</b></p>");
    current.setHours(ahead - 1);
    document.write("<p>1 hour ago, it was <b>" + current + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 12
function assignment31_34Q12() {
    var current = new Date();
    document.write("<p>Current date: <b>" + current + "</b></p>");
    current.setFullYear(1920);
    document.write("<p>100 years back, it was <b>" + current + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 13
function assignment31_34Q13() {
    var age = parseInt(prompt("Enter your age: "));
    var current = new Date();
    var currentYear = current.getFullYear();
    document.write("<p>Your age is <b>" + age + "</b></p>");
    document.write("<p>Your birth year is <b>" + (currentYear-age) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 31-34 Qno 14
function assignment31_34Q14() {
    var customerName = prompt("Enter customer Name: ");
    var current = new Date();
    var currentMonth = current.getMonth();
    var numberOfUnit = parseFloat(prompt("Enter number of Units: ")).toFixed(2);
    var chargesPerUnit = 16;
    var lateCharge = 350;
    document.write("<h1>K-Electric Bill</h1>");
    document.write("<p>Customer Name: <b>" + customerName + "</b></p>");
    document.write("<p>Month: <b>" + currentMonth + "</b></p>");
    document.write("<p>Number of units: <b>" + numberOfUnit + "</b></p>");
    document.write("<p>Charges per units: <b>" + chargesPerUnit + "</b></p></br></br>");
   
    document.write("<p>Net Amount Payable (within Due Date): <b>" + (numberOfUnit * chargesPerUnit).toFixed(2) + "</b></p>");
    document.write("<p>Late payment surcharge: <b>" + lateCharge + "</b></p>");
    document.write("<p>Gross Amount Payable (after Due Date): <b>" + ( (numberOfUnit * chargesPerUnit) + lateCharge).toFixed(2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}

// Chapter # 35-38 Qno 1
function assignment35_38Q1() {
    document.write("<button onclick = 'showDate()'>Show Current Date</button>");
}
function showDate () {
    var currentDate = new Date();
    document.write("<p>" + currentDate + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 2
var fullName;
function assignment35_38Q2() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    fullName = firstName + " " + lastName;
    document.write("<button onclick = 'greet(fullName)'>Greet user</button>");
}
function greet(name) {
    document.write("<p>Hello! Good Evening " + name + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 3
function assignment35_38Q3() {
    var num1 = parseInt(prompt("Enter 1st number:"));
    var num2 = parseInt(prompt("Enter 2nd number:"));
    document.write("<p>Sum of " + num1 + " + " + num2 + " = <b>" + sumOfTwo(num1, num2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function sumOfTwo(n1, n2) {
    return n1 + n2;
}
// Chapter # 35-38 Qno 4
function assignment35_38Q4() {
    var num1 = parseInt(prompt("Enter 1st number:"));
    var num2 = parseInt(prompt("Enter 2nd number:"));
    var operator = prompt("Enter operator: ");
    document.write("<p>" + num1 + " " + operator + " " + num2 + " = <b>" + sumOfTwo(num1, num2, operator) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function sumOfTwo(n1, n2, opr) {
    if (opr === "+") {
        return n1 + n2;
    }
    else if (opr === "-") {
        return n1 - n2;
    }
    else if (opr === "*") {
        return n1 * n2;
    }
    else if (opr === "/") {
        return n1 / n2;
    }
    else if (opr === "%") {
        return n1 % n2;
    }
    else {
        return "Unknown operator";
    }
}
// Chapter # 35-38 Qno 5
function assignment35_38Q5() {
    var num1 = parseInt(prompt("Enter number for its square: "));
    document.write("<p>Square of " + num1 + " is <b>" + squareOf(num1) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function squareOf(n1) {
    return n1 * n1;
}
// Chapter # 35-38 Qno 6
function assignment35_38Q6() {
    var num1 = parseInt(prompt("Enter number for its factorial: "));
    document.write("<p>Factorial of " + num1 + " is <b>" + factorialOf(num1) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function factorialOf(n1) {
    for (var i = n1 - 1; i > 0; i--) {
        n1 = n1 * i;
    }
    return n1;
}
// Chapter # 35-38 Qno 7
var start, end;
function assignment35_38Q7() {
    start = parseInt(prompt("Enter start number: "));
    end = parseInt(prompt("Enter end number: "));
    document.write("<button onclick = 'squareOf(start, end)'>Show counting</button>");
}
function squareOf(n1, n2) {
    for (var i = n1; i <= n2; i++) {
        document.write("<p><b>" + i + "</b></p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 8
function assignment35_38Q8() {
    var perpendicular = parseFloat(prompt("Enter perpendicular: "));
    var base = parseFloat(prompt("Enter base: "));
    calculateSquare();
    var hypotenuse = perpendicular + base;
    function calculateSquare() {
        perpendicular = perpendicular * perpendicular;
        base = base * base;
    }
    document.write("<p>Hypotenuse of right angle triangle is <b>" + hypotenuse + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 9
var width, height;
function assignment35_38Q9() {
    document.write("<button onclick = 'byValue(6,7)'>Arguments as value</button>");
    document.write("<button onclick = 'takeInput()'>Arguments as variable</button>");
}
function byValue(n1, n2) {
    document.write("<p>Area = <b>" + (n1*n2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function takeInput() {
    width = parseFloat(prompt("Enter width"));
    height = parseFloat(prompt("Enter height"));
    document.write("<button onclick = 'byVariable(width, height)'>Area</button>");
}
function byVariable(n1,n2) {
    document.write("<p>Area = <b>" + (n1*n2) + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 10
var palindromeStr;
function assignment35_38Q10() {
    palindromeStr = prompt("Enter string to check palindrome: ");
    palindromeStr = palindromeStr.toLowerCase();
    var bool = palindrome(palindromeStr);
    if(bool === true) {
        document.write("String is Palindrome");
        document.write("<p>Click on Refresh to go back home page</p>");
    }
    else {
        document.write("String is not Palindrome");
        document.write("<p>Click on Refresh to go back home page</p>");
    }
    function palindrome(palindromeStr) {
        lengthStr = palindromeStr.length;
        midStr = Math.floor(lengthStr/2);
        for (var i = 0; i < midStr; i++) {
            if (palindromeStr[i] !== palindromeStr[lengthStr - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}
// Chapter # 35-38 Qno 11
var string;
function assignment35_38Q11() {
    string = prompt("Enter string: ");
    document.write("<p>String: " + string + "</p>");
    document.write("<button onclick = 'upperCase(string)'>String Transformation</button>");
}
function upperCase(string) {
    var strArr = string.split(" ");
    var up, low;
    for (var i = 0; i < strArr.length; i++) {
        up = strArr[i].charAt(0);
        low = strArr[i].slice(1);
        strArr[i] = up.toUpperCase() + low.toLowerCase();
    }
    string = strArr.join(" ");
    document.write("<p>Output: <b>" + string + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 12
var string;
function assignment35_38Q12() {
    string = prompt("Enter string: ");
    document.write("<p>String: " + string + "</p>");
    document.write("<button onclick = 'longestStr(string)'>Find longest string</button>");
}
function longestStr(string) {
    strArr = string.split(" ");
    var longest;
    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr.length; j++) {
            if (strArr[i] < strArr[j]) {
                break;
            }
        }
        longest = strArr[i];
    }
    document.write("<p>Output: <b>" + longest + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 13
var string;
var letter;
function assignment35_38Q13() {
    string = prompt("Enter string: ");
    letter = prompt("Enter letter: ");
    document.write("<button onclick = 'occurence(string, letter)'>Find occurence of letter</button>");
}
function occurence(string, letter) {
    strArr = string.split("");
    var count = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === letter) {
            count = count + 1;
        }
    }
    document.write("<p>The occurence of <b>" + letter + "</b> in <b>" + string + "</b> is <b>" + count + "</b></p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 35-38 Qno 14
var radius;
function assignment35_38Q14() {
    radius = parseFloat(prompt("Enter radius of a circle: "));
    document.write("<button onclick = 'calcCircumference(radius)'>Click to find Circumference of Circle</button>");
    document.write("&nbsp;&nbsp;&nbsp;<button onclick = 'calcArea(radius)'>Click to find Area of Circle</button>");
}
function calcCircumference(radius) {
    var circumference = 2 * (3.147) * radius;
    document.write("<p>The Circumference is <b>" + circumference + "</b></p>");
}
function calcArea(radius) {
    var area = (3.147) * radius * radius;
    document.write("<p>The Area is <b>" + area + "</b></p>");
}
// Chapter # 38-42 Qno 1
function assignment38_42Q1() {
    var a = parseInt(prompt("Value of A: "));
    var b = parseInt(prompt("Value of B: "));
    document.write("<p>Value of A: " + a + "</p>");
    document.write("<p>Value of B: " + b + "</p>");
    document.write("<p>" + a + " ^ " + b + " = " + power(a,b) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function power(a,b) {
    var ans = 1;
    for (var i = 0; i < b; i++) {
        ans = ans * a;
    }
    return ans;
}
// Chapter # 38-42 Qno 2
function assignment38_42Q2() {
    var a = parseInt(prompt("Enter an year to check leap year or not: "));
    if (a % 4 === 0) {
        document.write("<p>" + a + " is a leap year</p>");
    }
    else
        document.write("<p>" + a + " is not a leap year</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 38-42 Qno 3
function assignment38_42Q3() {
    var a = parseInt(prompt("Enter value for side A: "));
    var b = parseInt(prompt("Enter value for side B: "));
    var c = parseInt(prompt("Enter value for side C: "));
    var s1 = valueOfS(a,b,c);
    var area1 = areaOfTriangle(s1,a,b,c);
    document.write("<p>Value of A = " + a + "</p>");
    document.write("<p>Value of B = " + b + "</p>");
    document.write("<p>Value of C = " + c + "</p>");
    document.write("<p>Area of Triangle = " + area1 + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function valueOfS(a,b,c) {
    var s = (a+b+c)/2;
    return s;
}
function areaOfTriangle(s1,a,b,c) {
    var area = s1*(s1-a)*(s1-b)*(s1-c);
    return area;
}
// Chapter # 38-42 Qno 4
function assignment38_42Q4() {
    var max = parseInt(prompt("Enter maximum marks of 3 subjects: "));
    var obt = parseInt(prompt("Enter obtained marks of 3 subjects: "));
    var avg1 = average(obt);
    var percent1 = percentage(obt,max);
    document.write("<p>Maximum marks of 3 subjects = " + max + "</p>");
    document.write("<p>Obtained marks of 3 subjects = " + obt + "</p>");
    document.write("<p>Average of 3 subjects = " + avg1 + "</p>");
    document.write("<p>Percentage of 3 subjects = " + percent1 + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function average(obt) {
    var avg = obt/3;
    return avg;
}
function percentage(obt,max) {
    var percent = (obt*100)/max;
    return percent;
}
// Chapter # 38-42 Qno 5
function assignment38_42Q5() {
    var str = prompt("Enter an string: ");
    var len = str.length;
    var chr = prompt("Enter a character to check its index: ");
    document.write("<p>Index of " + chr + " is " + checkIndex(str,len,chr) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function checkIndex(str,len,chr) {
    for (var i = 0; i < len; i++) {
        if (str[i] === chr) {
            break;            
        }
    }
    return i;
}
// Chapter # 38-42 Qno 6
function assignment38_42Q6() {
    var str = prompt("Enter a sentence: ");
    var len = str.length;
    if (len > 25) {
        document.write("<p>Sentence length should not greater than 25</p>");
    }
    else {
        document.write("<p>Sentence with vowels: " + str + "</p>");
        document.write("<p>Sentence without vowels: " + deleteVowel(str,len) + "</p>");
    }
    document.write("<p>Click on Refresh to go back home page</p>");
}
function deleteVowel(str,len) {
    var deletedStr = "";
    for (var i = 0; i < len; i++) {
        if ((str[i] !== 'a' && str[i] !== 'A') && (str[i] !== "e" && str[i] !== "E") && (str[i] !== "i" && str[i] !== "I") && (str[i] !== "o" && str[i] !== "O") && (str[i] !== "u" && str[i] !== "U")) {
            deletedStr += str[i];
        }
    }
    return deletedStr;
}
// Chapter # 38-42 Qno 7
function assignment38_42Q7() {
    var str = prompt("Enter a sentence: ");
    var len = str.length;
    document.write("<p>Your sentence: " + str + "</p>");
    document.write("<p>Vowels Occurrences: " + vowelOccurrences(str, len) + "</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function vowelOccurrences(str, len) {
    var occurrence = [];
    var i = 0;
    while (i < len) {
        var incr = "";
        var incr1 = "";
        switch(str[i]) {
            case "a" :
                if (str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'o' || str[i+1] === 'u') {
                    var temp = "";
                    temp = str[i] + str[i+1];
                    occurrence.push(temp);
                    break;
                }
            case "e" :
                if (str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'o' || str[i+1] === 'u') {
                    var temp = "";
                    temp = str[i] + str[i+1];
                    occurrence.push(temp);
                    break;
                }
            case "i" :
                if (str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'o' || str[i+1] === 'u') {
                    var temp = "";
                    temp = str[i] + str[i+1];
                    occurrence.push(temp);
                    break;
                }
            case "o" :
                if (str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'o' || str[i+1] === 'u') {
                    var temp = "";
                    temp = str[i] + str[i+1];
                    occurrence.push(temp);
                    break;
                }
            case "u" :
                if (str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'o' || str[i+1] === 'u') {
                    var temp = "";
                    temp = str[i] + str[i+1];
                    occurrence.push(temp);
                    break;
                }
            default :
        }
        i++;
    }    
    return occurrence;
}
// Chapter # 38-42 Qno 8
function assignment38_42Q8() {
    var distance = parseFloat(prompt("Enter distance between two Cities (in km.): "));
    document.write("<p>Distance in Kilometer: " + distance + " km</p>");
    document.write("<p>Distance in Meter: " + meters(distance) + " m</p>");
    document.write("<p>Distance in Feet: " + feets(distance) + " ft</p>");
    document.write("<p>Distance in Inch: " + inches(distance) + " inc</p>");
    document.write("<p>Distance in Centimeter: " + centimeters(distance) + " c</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
function meters(distance) {
    return (distance * 1000);
}
function feets(distance) {
    return (distance * 3280.84);
}
function inches(distance) {
    return (distance * 39370);
}
function centimeters(distance) {
    return (distance * 100000);
}
// Chapter # 38-42 Qno 9
function assignment38_42Q9() {
    var empHours = parseInt(prompt("Employee total working hours?"));
    var overtimeRate = 12;
    var overtimeHours;
    var totalAmount;
    if(empHours >= 40){
        overtimeHours = empHours - 40;
        totalAmount = overtimeHours * overtimeRate;
        document.write("<p>Overtime Hours = " + overtimeHours + " and Overtime total amount = " + totalAmount + " Rs</p>");
        document.write("<p>Click on Refresh to go back home page</p>");
    }
    else {
        document.write("<p>There is no overtime for less than 40 hours</p>");
        document.write("<p>Click on Refresh to go back home page</p>");
    }
}
// Chapter # 38-42 Qno 10
function assignment38_42Q10() {
    var amount = prompt("Enter amount to withdraw (in hundreds): ");
    document.write("<p>Amount to withdraw: " + amount + "</p>");
    if (amount[1] > 4) {
        document.write("<p>You will have " + amount[0] + " hundred notes 1 fifty notes " + (amount[1] - 5) + " ten notes.</p>");
    }
    else
        document.write("<p>You will have " + amount[0] + " hundred notes " + amount[1] + " ten notes.</p>");
    document.write("<p>Click on Refresh to go back home page</p>");
}
// Chapter # 43-48 Qno 1
function assignment43_48Q1() {
    document.write("<a href='#' onclick='greeting()'>GREETING</a>")
    document.write("<p>Click on Refresh to go back home page</p>");
}
function greeting() {
    alert("Good morning Sir/Madam");
}
// Chapter # 43-48 Qno 2
function assignment43_48Q2() {
    alert("Thanks for purchasing a phone from Pakistan");
}
// Chapter # 43-48 Qno 3
function assignment43_48Q3(){
    var table = document.getElementById('myTbl'),rIndex,cIndex;
    for (var i = 1; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[3].onclick = function () {
                rIndex = this.parentElement.rowIndex;
                table.deleteRow(rIndex);
            }
        }
    }
}
// Chapter # 43-48 Qno 4
function assignment43_48Q4_1() {
    document.getElementById('riverImg').src = "image2.jpg";
}
function assignment43_48Q4_2() {
    document.getElementById('riverImg').src = "image1.png";
}
// Chapter # 43-48 Qno 5
var counter = document.getElementById('counter');
var num = 0;
function assignment43_48Q5inc() {
    num++;
    counter.innerHTML = "<p>" + num + "</p>";
}
function assignment43_48Q5dec() {
    num--;
    counter.innerHTML = "<p>" + num + "</p>";
}
// Chapter # 49-52 Qno 1
function assignment49_52Q1() {
    var name = document.getElementById('signUpName');
    var email = document.getElementById('signUpEmail');
    var cellNo = document.getElementById('signUpCell');
    var male = document.getElementById('signUpMale');
    var female = document.getElementById('signUpFemale');
    var password = document.getElementById('signUpPswd');
    if (name.value === "" || email.value === "" || cellNo.value === "" || password.value === "" || (male.checked === false && female.checked === false) ) {
        alert("Please fill all fields!");
    }
    else{
        var div = document.getElementById('showSignUp');
        div.innerHTML = "<h3>Show Detail</h3>";
        div.innerHTML += "<p>Name: " + name.value + "</p>";
        if (male.checked === true) {
            div.innerHTML += "<p>Gender: Male</p>";
        }
        else {
            div.innerHTML += "<p>Gender: Female</p>";
        }
        div.innerHTML += "<p>Email: " + email.value + "</p>";
        div.innerHTML += "<p>Cell No: " + name.value + "</p>";
        name.value = "";
        email.value = "";
        cellNo.value = "";
        password.value = "";
    }
}// Chapter # 49-52 Qno 2
function assignment49_52Q2() {
    var para = document.getElementById('paraExtend');
    var text1 = "<p>Facebook (stylized as facebook) is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.</p>";
    var text2 = "<p>The founders initially limited Facebook membership to Harvard students. Membership was expanded to Columbia, Stanford, and Yale before being expanded to the rest of the Ivy League, MIT, and higher education institutions in the Boston area, then various other universities, and lastly high school students. Since 2006, anyone who claims to be at least 13 years old has been allowed to become a registered user of Facebook, though this may vary depending on local laws. The name comes from the face book directories often given to American university students. <a href='javascript:void(0)' onclick='readLess()'>Read less</a></p>";
    para.innerHTML = text1 + text2;
}
function readLess() {
    var para = document.getElementById('paraExtend');
    var text1 = "<p>Facebook (stylized as facebook) is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes. <a href='javascript:void(0)' onclick='assignment49_52Q2()'>Read more</a></p>";
    para.innerHTML = text1;
}
// Chapter # 49-52 Qno 3
var noOfTime = 0
function assignment49_52Q3() {
    var stdName = document.getElementById('name');
    var stdMarks = document.getElementById('marks');
    if (stdName.value === "" || stdMarks.value === "") {
        alert("Please fill all fields!");
    }
    else{
        noOfTime++;
        var stdTbl = document.getElementById('stdTable');
        if (noOfTime === 1) {
            var head = "<tr><th>Serial No.</th><th>Student Name</th><th>Student Marks</th></tr>";
            var text = "<tr><td>" + noOfTime + "</td><td>" + stdName.value + "</td><td>" + stdMarks.value + "</td><td><button onclick='deleteData()'>Delete</button></td><td><button onclick='editData()'>Edit</button></td></tr>";
            stdTbl.innerHTML = head  + text;
            stdMarks.value = stdName.value = "";
        }
        else{
            var text = "<tr><td>" + noOfTime + "</td><td>" + stdName.value + "</td><td>" + stdMarks.value + "</td><td><button onclick='deleteData()'>Delete</button></td><td><button onclick='editData()'>Edit</button></td></tr>";
            stdTbl.innerHTML += text;
            stdMarks.value = stdName.value = "";
        }
    }
}
function deleteData() {
    var table12 = document.getElementById('stdTable'),rIndex,cIndex;
    for (var i = 1; i < table12.rows.length; i++) {
        for (var j = 0; j < table12.rows[i].cells.length; j++) {
            table12.rows[i].cells[3].onclick = function () {
                rIndex = this.parentElement.rowIndex;
                table12.deleteRow(rIndex);
            }
        }
    }
}
function editData() {
    var editF = document.getElementById('editForm');
    editF.innerHTML = "<form><label for='name'>Name: </label><input id='editName' type='text' name='name'></br><label for='marks'>Marks: </label><input id='editMarks' type='text' name='marks'></form><button id='updateData' onclick='updateData()'>Update</button>";
}
function updateData() {
    var table12 = document.getElementById('stdTable'),rIndex,cIndex;
    var name = document.getElementById('editName');
    var marks = document.getElementById('editMarks');
    for (var i = 1; i < table12.rows.length; i++) {
        for (var j = 0; j < table12.rows[i].cells.length; j++) {
            table12.rows[i].cells[1].innerHTML = name.value;
            table12.rows[i].cells[2].innerHTML = marks.value;
        }
    }
    var editF = document.getElementById('editForm');
    editF.innerHTML = "";
}
// Chapter # 52-57 Qno 1
function assignment52_57Q1(imgValue) {
    var divID = document.getElementById('openImg');
    var imgText = "<img src=" + imgValue + "></img>";
    divID.innerHTML = imgText;
}
// Chapter # 52-57 Qno 2
function assignment52_57Q2(opr) {
    var paragraph = document.getElementById('paraForZoom');
    var style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    if (opr === '+') {
        paragraph.style.fontSize = (fontSize + 10) + "px";
    }
    else{
        paragraph.style.fontSize = (fontSize - 10) + "px";
    }
}
// Chapter # 58-67 Qno 1 (i)
var contentDiv = document.getElementById('main-content');
// Chapter # 58-67 Qno 1 (ii)
var contentDivChild = contentDiv.childNodes;
for (var i = 0; i < contentDivChild.length; i++) {
    console.log(contentDivChild[i]);
}
// Chapter # 58-67 Qno 1 (iii)
var txt67;
var renderClass = document.getElementsByClassName('render');
var renderDiv = document.getElementById('rendering');
for (var i = 0; i < renderClass.length; i++) {
    var para67 = document.createElement('p');
    var text67 = document.createTextNode(renderClass[i].innerHTML);
    para67.appendChild(text67);
    renderDiv.appendChild(para67);
}
// Chapter # 58-67 Qno 1 (iv)
var inputFirstName = document.getElementById('first-name');
inputFirstName.value = "Adnan";
// Chapter # 58-67 Qno 1 (v)
var inputLastName = document.getElementById('last-name');
inputLastName.value = "Ahmed Siddiqui";
var inputEmail = document.getElementById('email');
inputEmail.value = "adnan@gmail.com";

// Chapter # 58-67 Qno 2 (i)
var formContent = document.getElementById('form-content');
if (formContent.nodeType === 1){
    console.log("Element Node");
}
else {
    console.log("Text Node");
}
// Chapter # 58-67 Qno 2 (ii)
if (inputLastName.nodeType === 1){
    console.log("Element Node");
}
else {
    console.log("Text Node");
}
var lastNameChild = inputLastName.childNodes;
console.log(lastNameChild.length);
// Chapter # 58-67 Qno 2 (iii)
var lastPara67 = document.createElement('p');
var lastText67 = document.createTextNode('Hello World');
lastPara67.appendChild(lastText67);
inputLastName.appendChild(lastPara67);
console.log(inputLastName.firstChild);
// Chapter # 58-67 Qno 2 (iv)
console.log(contentDiv.firstChild);
console.log(contentDiv.lastChild);
// Chapter # 58-67 Qno 2 (v)
console.log(inputLastName.nextSibling);
console.log(inputLastName.previousSibling);
// Chapter # 58-67 Qno 2 (v)
console.log(inputEmail.parentNode);
if (inputEmail.nodeType === 1){
    console.log("Element Node");
}
else {
    console.log("Text Node");
}
//            CHAPTER # 9 to 11
//       "USER INPUT & CONDITIONAL STATEMENT"
// Q:1
// var cityName = prompt("enter the name of your city");
// if (cityName === "karachi"){
//     document.write("welcome to the city of lights!");
// }
// else { document.write ("welcome")};

// // Q:2
// var gender = prompt("Enter your gender");
// if (gender === "male"){
//     document.write ("<br> male");
// }
// else if (gender === "female"){
//     document.write ("<br> female");
// }

// Q:3
// var signalColor = prompt("Enter signal color");
// if (signalColor === "red"){
//     document.write("<br> Must Stop");
// }

// else if (signalColor === "yellow"){
//     document.write("<br> Ready to move");    
// }

// else if (signalColor === "green"){
//     document.write("<br> Move now");    
// }
// else 
//      {document.write("<br> Invalid Input!");}

// Q:4
// var remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
// if (remainingFuel > 0.25){
//     document.write("<br> Please refill the fuel in your car.")
// } 
// else {
//     document.write("<br> You have enough fuel in your car.");
// }

// Q:5
// part(a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// part(b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else {
//     alert("given condition for variable b is false")
// }

// part(c)
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// else {
//     alert("condition 1 is false")

// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// else {
//     alert("condition 3 is false")
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// part(d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}

// part(e)
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// else {
//     alert("This situation is true")
// }

// part(f)
// Q:6
// var students1 = +prompt("Enter marks obtained in subject");
// var students2 = +prompt("Enter marks obtained in subject");
// var students3 = +prompt("Enter marks obtained in subject");
// var totalMarks = 300;
// var totalObtainedMarks = students1 + students2 + students3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// if (percentage >= 80) {grade = "A+";} 
// else if (percentage >= 70) {grade = "A";} 
// else if (percentage >= 60) {grade = "B";} 
// else if (percentage >= 50) {grade = "C";}
// else if (percentage >= 40) {grade = "D";} 
// else {grade = "Fail";}

// document.write("<br>" + "Total Marks: " + totalMarks + "<br>");
// document.write( "Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// // document.write("Remarks: " + remarks + "<br>");

// if (grade === "Fail"){
//     document.write("Remarks: Sorry, you have failed.");
// }
// else {
//     document.write("Remarks: Congratulations, you have passed!");
// }

// Q:7
// part(a)
// var secretNum = prompt(10);
// var userGuess = prompt("Guess the secret num (between 1 and 10)");
// if (userGuess === secretNum){
//     document.write("<br> Bingo correct answer.")
// }
// else{
//     document.write("<br> Sorry, the correct answer was: " + secretNum)
// }

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt the user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess matches the secret number
// if (userGuess === secretNumber) {
//     // If the user's guess matches the secret number, display "Bingo! Correct answer"
//     document.write("<h2>Bingo! Correct answer.</h2>");
// } else {
//     // If the user's guess does not match the secret number, display a message indicating the correct answer
//     document.write("<h2>Sorry, the correct answer was: " + secretNumber + "</h2>");
// }

// Q:8
// var number = prompt("number") 
// if (number % 3 === 0) {
//     document.write("Number " + number + " 3 se taqseem kiya ja sakta hai.<br>");
// }
// else {
//     document.write("Number " + number + " 3 se taqseem nahi kiya ja sakta hai.<br>");
// }

// Q:9
// var num = prompt("enter even&odd num")
// if (num % 2 === 0){
//     document.write(num + " " + "even num" + "<br>")
// }
// else{
//     document.write(num + " " + "odd num" + "<br>")
// } 

// Q:10
// part(a,b,c,d)
// var temperature = prompt("Enter Temperature");
// if (temperature > 40){
//     document.write("It is too hot outside" + "<br>")
// }
// else if (temperature > 30){
//     document.write("The Weather today is Normal.")
// }
// else if (temperature > 20){
//     document.write("Today’s Weather is cool.")
// }
// else if (temperature > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }
// else{
//     document.write("Temperature is too low to display a message.")
// }

// Q:11
// part(a,b,c)
// var firstNumber = +prompt("Enter the first number:");
// var secondNumber = +prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %)");

// if (operation === "+") {
//     result = firstNumber + secondNumber;
// }
// else if (operation === "-") {
//     result = firstNumber - secondNumber;
// }
// else if (operation === "*") {
//     result = firstNumber * secondNumber;
// }
// else if (operation === "/") {
//     result = firstNumber / secondNumber;
// } 
// else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } 
// else {
//     document.write ("Invalid operation!");
// }
// document.write("<h2>The result is: " + result + "</h2>");
//      CHAPTER 9 TO 11 *END*



var code = prompt("Enter a character");
if (code >= 48 && code <= 57) {
    result = "The input is a number.";
}
else if (code >= 65 && code <= 90) {
    result = "The input is an uppercase letter.";
}
else if (code >= 97 && code <= 122) {
    result = "The input is a lowercase letter.";
}
else {
    result = "Invalid input.";
}
// }

document.write("<h2>" + result + "</h2>");
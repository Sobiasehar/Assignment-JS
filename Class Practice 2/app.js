//                    Chapter#4 "VARIABLE NAMES: LEGAL & ILLEGAL"
var heading = "Chapter#4 (VARIABLE NAMES: LEGAL & ILLEGAL)";
document.write("<h2>" + heading + "</h2>");

// Q:1
var  firstVar = 10, secondVar = "salam", thirdVar = true;
// combined = firstName + lastName + qualification; 
document.write("Q#1 Ans:"+ " " + "<br>" + "First variable: " + firstVar + "<br>" + "Second variable: " + secondVar + "<br>" + "Third variable: " + thirdVar + "<br>");

// Q:2
document.write ("<br>" + "Q#2 Ans:" + " " + "<h3>Legal variable names:</h3>");
document.write ("1. myvariable <br>");
document.write ("2. num123 <br>");
document.write ("3. _count <br>");
document.write ("4. firstName <br>");
document.write ("5. $totalAmount <br><br>");

document.write ("<h3>Illegal variable names</h3>");
document.write ("1. 123num <br>");
document.write ("2. myVariable <br>");
document.write ("3. @username <br>");
document.write ("4. true <br>");
document.write ("5. var-name <br>");

// Q:3
// Part:A
document.write ("<br>" + "Q#3" + "<br>" + "part:a" + "&nbsp" + "&nbsp" + "&nbsp" + "(Rules for naming JS variables)");

// Part:B
document.write ("<br>", "Part:b" , "&nbsp", "&nbsp", "&nbsp" , "Variable names can only contain letters,",  "&nbsp", "&nbsp", "&nbsp" , "digits,",  "&nbsp", "&nbsp", "&nbsp" ,"underscores (_),",  "&nbsp", "&nbsp", "&nbsp" , "and",  "&nbsp", "&nbsp", "&nbsp" , "dollar signs ($)." );

// Part:c
document.write ("<br>" + "Part:c" + "&nbsp" + "&nbsp" + "&nbsp" + "Variables must begin with a letter," +"&nbsp" + "&nbsp" + "&nbsp" + " underscore (_)," + "&nbsp" + "&nbsp" + "&nbsp" + "or dollar sign ($).");

// Part:D
document.write ("<br>" + "Part:d" + "&nbsp" +  "&nbsp" +  "&nbsp" + "Variable names are case-sensitive.");

// Part:E
document.write ("<br>" + "Part:e" + "&nbsp" +  "&nbsp" +  "&nbsp" +"Variable names should not be JavaScript keywords.")
//                         *CHAPTER#1 END*

//                  Chapter#5 "MATH EXPRESSIONS"
var heading = "Chapter#5 MATH EXPRESSIONS";
document.write("<h2>" + heading + "</h2>");

// var heading = "*addition*";
// document.write ("<h4>" + heading + "<h4>");
var num1 = 3, num2 = 5, add = num1 + num2;
document.write ("Q#1 Task#1 Ans: " + " " +"sum of" + " " + num1 +  " " + "and" + " " + num2 + " " + "is" + " " + add + ".");

// var heading = "*subtraction*"
// document.write ("<h4>"+ heading+"<h4>");
var num1 = 10, num2 = 5, sub = num1 - num2;
document.write ("<br>" + "<br>" + "Q#2 Task#2 Ans: " + " " + "sum of " + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sub + ".");

// var heading = "*multiplication*";
// document.write ("<h4>"+ heading+"<h4>");
var num1 = 10, num2 = 3, multi = num1 * num2;
document.write ("<br>" + "Task#3 Ans: " + " " + "sum of " + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + multi + ".");

var num1 = 20, num2 = 5, division = num1 / num2;
document.write ("<br>" + "Task#4 Ans: " + " " + "sum of " + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + division + ".");

var num1 = 50, num2 = 20, modulus = num1 % num2;
document.write ("<br>" + "Task#5 Ans: " + " " + "sum of " + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + modulus + ".");

var value = 10;
document.write ("<br>" + "<br>" + "<br>" + "Q#3" + "<br>" + "part(a)" + "&nbsp" + "&nbsp" + "&nbsp"  + "my value is" + " " + value + ".")

var myvalue = 20;
document.write ("<br>" + "part(b)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after variable declaration is: " + myvalue + ".");

var initializedValue = 50;
document.write ("<br>" + "part(c)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after variable initialization is: " + initializedValue + ".")

var initialValue = 5;
document.write ("<br>" + "part(d)" + "&nbsp" + "&nbsp" + "&nbsp" +  "Initial value is: " + initialValue + ".");

var initialValue = 5; initialValue++; 
document.write ("<br>" + "part(e)" + "&nbsp" + "&nbsp" + "&nbsp" +  "Incremented value is: " + initialValue + ".");

var initialValue = 5; initialValue++
document.write ("<br>" + "part(f)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after increment is: " + initialValue + ".");

var initialValue = 5; initialValue++; initialValue += 7;
document.write ("<br>" + "part(g)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after adding 7 is: " + initialValue + ".");

var initialValue = 5; initialValue++;  initialValue += 7;
document.write ("<br>" + "part(h)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after addition is: " + initialValue + ".");

var initialValue = 13; initialValue--;
document.write ("<br>" + "part(i)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after decrement is: " + initialValue + ".");

var initialValue = 13; initialValue--;
document.write ("<br>" + "part(j)" + "&nbsp" + "&nbsp" + "&nbsp" +  "value after decrement is: " + initialValue + ".");

var initialValue = 13; remainder = initialValue % 3;
document.write ("<br>" + "part(k)" + "&nbsp" + "&nbsp" + "&nbsp" +  "Remainder after dividing the variable's value by 3 is: " + remainder + ".");

var initialValue = 15; remainder = initialValue % 5;
document.write ("<br>" + "part(l)" + "&nbsp" + "&nbsp" + "&nbsp" +  "The remainder is: " + remainder + ".");

var ticket = 600, numOfTickets = 5, totalCost =  ticket * numOfTickets;
document.write ("<br>" +"<br>" +"<br>" +"<br>" + "Q#4" + "&nbsp" + "&nbsp" + "&nbsp" + "The cost of buying" + " " + numOfTickets + " " + "ticket is" + " " + totalCost + " " + "PKR.");

var num = 5;
document.write ("<br>" + "<br>" + "<br>" + "Q#5" +  "<br>" + "Table of 5" + "<br>" + num + " " + "x 1 = "  + num * 1 + "<br>" + num + " " + "x 2 = "  + num * 2 + "<br>" + " " + num + "x 3 = " + num * 3  + "<br>" + num + " " + "x 4 = "+ num * 4 + "<br>" + num + " " + "x 5 = "+ num * 5 + "<br>" + num + " " + "x 6 = " + num * 6 + "<br>" + num + " " + "x 7 = " + num * 7 + "<br>" + num + " " + "x 8 = " + num * 8 + "<br>" + num + " " + "x 9 = " + num * 9 + "<br>" + num + " " + "x 10 = " + num * 10 + "<br>"  );

var celsiusTemperature = 28;
document.write ("<br>" + "<br>" + "<br>" + "Q#6" +"<br>" + "Part(a)" + "&nbsp" + "&nbsp" + "&nbsp"  + celsiusTemperature);

var celsiusTemperature = 28, fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write ("<br>" + "Part(b)" + "&nbsp" + "&nbsp" + "&nbsp"  + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

var fahrenheitTemperature = 82;
document.write ("<br>" + "Part(c)" + "&nbsp" + "&nbsp" + "&nbsp" + fahrenheitTemperature);

var fahrenheitTemperature = 82; celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
document.write ("<br>" + "Part(c)" + "&nbsp" + "&nbsp" + "&nbsp" + fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");



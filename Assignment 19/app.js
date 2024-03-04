//                      CHAPTER# "ARRAYS"
// Q:1
var arr = [];
var arr = ["wania," +" "+ "hania," +" "+ "rabia," +" "+ "rania," +" "+ "sehar" + " " + "<br>"];
document.write("Q#1" + " " + arr);

// Q:2
var arr = [];
var arr = ["rabia," + "sehar" + "<br>"];
document.write("<br>Q#2" + " " +arr);

// Q:3
var arr = ["zimal"];
document.write("<br>Q#3" + " " + "My name is" +" "+ arr + "<br>");

// Q:4
var arr =[2024];
document.write("<br>Q#4" + " " + arr + "<br>");

// Q:5
var arr = ["True"];
document.write("<br>Q#5" + " " + arr + "<br>");

// Q:6
var arr = ["ali", 55, "False"];
document.write("<br>Q#6" + " " + arr + "<br>");

// Q:7
var arr = ["<br>Qualification:" + "<br>1)SSC" + "<br>2)HSC" + "<br>3)BCS" + "<br>4)BS" + "<br>5)BCOM" + "<br>6)MS" + "<br>7)M.Phil." + "<br>8)PhD"];
document.write("<br>Q#7" + arr + "<br>");

// Q:8
var arr = ["Score of Michael is" + "Score of John is" + "Score of Tony is"];
var scores = [420, 380, 450];
var storeScore = (scores/500)*100;
document.write("<br>Q#8" + " " + storeScore + " " + "percentage" + "<br>");

// Q:9
// Part(a)
var colors = ["red", "green", "blue"];
document.write("<b><br>Q#9Part(a)</b>" + " " + "<b>Original Array:</b>" + colors.join(", ") + "<br>");

var newColor = prompt("Enter a color to add to the beginning:");
colors.unshift(newColor)
document.write("<b>Updated Array beginning:</b> " + colors.join(", ") + "<br>");

// Part(b)
var colors = ["purple", "ice blue", "silver"];
document.write ("<b><br>Part(b)</b>" + " " + "<b>Original Array:</b>" + colors.join(", ") + "<br>");

var newColor = prompt("Enter a color to add to the end:");
colors.push(newColor);
document.write("<b>Updated Array end:</b> " + colors.join(", ") + "<br>");

// Part(c)
var colors = ["red", "green", "blue"];
document.write("<b><br>Part(c)</b>" + " " + "<b>Original Array:</b>" + colors.join(", ") + "<br>");

// newColor = prompt("Enter a color to add 2 more color to the beginning");
colors.unshift("purple" + " ", "white");
document.write("<b>Updated Array 2 more color beginning:</b>" + colors.join(", ") + "<br>");

 
// Part(d)
var colors = ["red",  "blue", "green", "yellow", "orange", "black"];
document.write("<b><br>Part(d)</b>" + " " + "<b>Original Array:</b>" + " " + colors.join(", ") + "<br>");

colors.shift();
document.write("<b>Updated Array first color remove:</b>" + " " + colors.join(", ") + "<br>"); 

// Part(e)
var colors = ["red",  "blue", "black", "white"];
document.write("<b><br>Part(e)</b>" + " " + "<b>Original Array:</b>" + " " + colors.join(", ") + "<br>");

colors.pop();
document.write("<b>Updated Array last color remove:</b>" + " " + colors.join(", ") + "<br>");

// Part(f)
var colors = ["white", "black", "indigo", "orange", "green"];
document.write("<b><br>Part(f)</b>" + "<b>Original Array desired color:</b>" + " " + colors.join(", ") + "<br>");

var index = prompt("Enter the index where you want to add the color:");
var newColor = prompt("Enter the color you want to add:");

colors.splice(index, 0, newColor);
document.write("<b>Updated Array:</b>" + colors.join(", ") + "<br>")

// Part(g)
var colors = ["orange", "iceblue", "indigo", "white", "green"];
document.write ("<b><br>Part(g)</b>" + "<b>Original Array:</b>" + colors.join(", ") + "<br>");

var index = parseInt(prompt("Enter the index from which you want to delete colors:"));
var count = parseInt(prompt("Enter the number of colors you want to delete:"));

colors.splice(index, count);
document.write("<b>Updated Array:</b>" + colors.join(", ") + "<br>")

// Q#10
// var scoresOfStudends = [320,230,480,120];
// document.write("<b><br>Q#10</b>" + " " + "<b>score of students:</b>" + scoresOfStudends + "<br>");

// scoresOfStudends.sort(a, b)
//  {return a-b};
// document.write("<b>score of student in Ascending Order</b>" + " " + scoresOfStudends + "<br>")

// Q#11
var cities = ["Karachi", "Islamabad", "Quetta", "Lahore", "Multan"];
console.log("Q#11", "Original Array of city name:", cities);

var selectedCities = [];
selectedCities = cities.slice(0, 3);
console.log("Selected Array of city name:", selectedCities);

// Q#12
var arr = ["This", "is", "my", "cat"];
var singalSrting = arr.join(" ")
console.log("Q#12", singalSrting);

// Q#13
var queue = [];
queue.push("Keyboard");
queue.push("mouse");
queue.push("printer");
queue.push("monitor");

var firstValue = queue.shift(); 
var secondValue = queue.shift(); 
var thirdValue = queue.shift(); 

document.write("<br>", "<b>DEVICES:</b>", "keyboard", "mouse", "printer", "monitor");
document.write("First Value:", firstValue);
document.write("Second Value:", secondValue);
document.write("Third Value:", thirdValue);
document.write("Third Value:", thirdValue);

// Q#14
var stack = [];
stack.push("Monitor");
stack.push("Printer");
stack.push("Mouse");
stack.push("Keyboard");

var lastValue = stack.pop(); 
var secondLastValue = stack.pop(); 
var thirdLastValue = stack.pop(); 
var forthLastValue = stack.pop();

document.write("<br>", "<b>DEVICES:</b>", "keyboard", "mouse", "printer", "monitor");
document.write("<br>", "Last Value:", lastValue);
document.write("<br>","Second Last Value:", secondLastValue);
document.write("<br>","Third Last Value:", thirdLastValue);
document.write("<br>","forth Last Value:", forthLastValue);
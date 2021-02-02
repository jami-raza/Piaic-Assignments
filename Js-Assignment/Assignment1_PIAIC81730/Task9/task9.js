var a = 5;
var b = 3;

document.getElementById("heading").innerHTML = "Subtraction, Multiplication, Division, and Modulus";
document.getElementById("sub").innerHTML = "Subtraction of"+" " + a + " " + "and" + " " + b + " " + "is" + " " + (a - b);
document.getElementById("multi").innerHTML =  "Multiplication of"+" " + a + " " + "and" + " " + b + " " + "is" + " " + (a * b);
document.getElementById("divi").innerHTML =  "Division of"+" " + a + " " + "and" + " " + b + " " + "is" + " " + (a / b);
document.getElementById("modulus").innerHTML =  "Modulus of"+" " + a + " " + "and" + " " + b + " " + "is" + " " + (a % b);
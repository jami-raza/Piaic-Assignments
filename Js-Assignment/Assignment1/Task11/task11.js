var celsius = 30;
var fahrenheit = 12;

var convert_ferenheit_to_celsius = (fahrenheit - 32) * 5/9;
var convert_celsius_to_ferenheit = (celsius * 9/5) + 32;

document.getElementById("p1").innerHTML = celsius +"&deg;C"+" "+"is"+" "+convert_celsius_to_ferenheit+"&deg;F";
var p2 = document.createElement("p");
p2.innerHTML = fahrenheit +"&deg;F"+" "+"is"+" "+convert_ferenheit_to_celsius+"&deg;C";
document.body.appendChild(p2);
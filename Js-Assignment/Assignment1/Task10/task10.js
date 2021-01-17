var a;
var b = 5;
var c = b+1;
var d = c + 7;
var e = d - 1;
var f = e % 3;

document.getElementById("p1").innerHTML = "Value after variable declaration is:"+ " " + a;
document.getElementById("p2").innerHTML = "Initial value:"+ " " + b;
document.getElementById("p3").innerHTML = "Value after increament is:"+ " " + c;
document.getElementById("p4").innerHTML = "Value after addition is:"+ " " + d;
document.getElementById("p5").innerHTML = "Value after decreament is:"+ " " + e;
document.getElementById("p6").innerHTML = "The Remainder is:"+ " " + f;

/* Body styles */
document.getElementById("body").style.textAlign = "center"
document.getElementById("body").style.textTransform = "capital"
document.getElementById("body").style.fontWeight = "700"
document.getElementById("body").style.padding = "80px"
document.getElementById("body").style.margin = "50px"
document.getElementById("body").style.border = "5px solid orange"
document.getElementById("body").style.borderRadius = "10px"
document.getElementById("body").style.fontFamily = "Arial"

/* Element styles */
document.getElementById("p1").style.fontSize = "28px";
document.getElementById("p2").style.fontSize = "24px"
document.getElementById("p2").style.color = "blue"
document.getElementById("p3").style.fontSize = "24px"
document.getElementById("p3").style.color = "green"
document.getElementById("p4").style.fontSize= "22px"
document.getElementById("p4").style.color = "yellowgreen"
document.getElementById("p5").style.fontSize = "18px"
document.getElementById("p5").style.color = "maroon"
document.getElementById("p6").style.fontSize = "16px"
document.getElementById("p6").style.color = "red"

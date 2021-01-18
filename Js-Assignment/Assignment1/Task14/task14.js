var a = 2;
var b = 1;


var p1 = document.createElement("p");
p1.innerHTML = "a  = "+" "+ a;
document.body.appendChild(p1);

var p2 = document.createElement("p");
p2.innerHTML = "b  = "+" "+ b;
document.body.appendChild(p2);

var p3 = document.createElement("p");
p3.innerHTML = "result of --a is :"+" "+"1"
document.body.appendChild(p3);
var p4 = document.createElement("p");
p4.innerHTML = "result of --a - --b is :"+" " +"1"
document.body.appendChild(p4);
var p5 = document.createElement("p");
p5.innerHTML = "result of --a - --b + ++b is :"+" "+"2"
document.body.appendChild(p5);
var p6 = document.createElement("p");
p6.innerHTML = "result of --a - --b + ++b + b-- is :"+" "+ (--a - --b + ++b + b--);
document.body.appendChild(p6);

var p7 = document.createElement("p");
p7.innerHTML = "Now the result a is :"+" "+ a;
document.body.appendChild(p7);
var p8 = document.createElement("p");
p8.innerHTML = "Now the result b is :"+" "+ b;
document.body.appendChild(p8);


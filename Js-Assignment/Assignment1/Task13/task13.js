var a = 10;

var h1 = document.createElement("h3");
h1.innerHTML = "Result";
document.body.appendChild(h1);

var p1 = document.createElement("p");
p1.innerHTML = "The value of a is:"+" "+ a;
document.body.appendChild(p1);

var hr = document.createElement('hr');
document.body.appendChild(hr);

var p2 = document.createElement('p');
p2.innerHTML = "The value of ++a is:"+" "+(++a);
document.body.appendChild(p2);
var p3 = document.createElement('p');
p3.innerHTML = "Now the value of a is:"+" "+(a);
document.body.appendChild(p3);
var hr = document.createElement('hr');
document.body.appendChild(hr);

var p4 = document.createElement('p');
p4.innerHTML = "The value of a++ is:"+" "+(a++);
document.body.appendChild(p4);
var p5 = document.createElement('p');
p5.innerHTML = "Now the value of a is:"+" "+(a);
document.body.appendChild(p5);
var hr = document.createElement('hr');
document.body.appendChild(hr);

var p7 = document.createElement('p');
p7.innerHTML = "The value of --a is:"+" "+(--a);
document.body.appendChild(p7);
var p8 = document.createElement('p');
p8.innerHTML = "Now the value of a is:"+" "+(a);
document.body.appendChild(p8);
var hr = document.createElement('hr');
document.body.appendChild(hr);

var p9 = document.createElement('p');
p9.innerHTML = "The value of a-- is:"+" "+(a--);
document.body.appendChild(p9);
var p10 = document.createElement('p');
p10.innerHTML = "Now the value of a is:"+" "+(a);
document.body.appendChild(p10);
var hr = document.createElement('hr');
document.body.appendChild(hr);

document.body.style.textAlign = "center"
document.body.style.margin = "20px 250px 20px 250px"
document.body.style.fontFamily = "Arial"
document.body.style.border = "10px solid cyan"
h1.style.color = "blue"
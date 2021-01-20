var a = parseFloat(prompt("Enter First number to calculate"));
var b = prompt("Enter a operator");
var c = parseFloat(prompt("Enter Second number"))


document.body.style.textAlign = "center";
var head = document.createElement("h1");
head.innerHTML = "Calculator";
document.body.appendChild(head)

if(b === "+" ) {
    var add = document.createElement('p');
    add.innerHTML = "Sum of "+a +" "+"and"+" "+c+" "+"is:"+" "+(a + c);
    document.body.appendChild(add);
    add.style.fontSize = "24px";
    add.style.fontFamily = "verdana"
}
else if (b === '-') {
    var sub = document.createElement('p');
    sub.innerHTML = "Subtraction of "+a +" "+"and"+" "+c+" "+"is:"+" "+(a - c);
    document.body.appendChild(sub);
    sub.style.fontSize = "24px";
    sub.style.fontFamily = "verdana"
}
else if (b === '*') {
    var multiply = document.createElement('p');
    multiply.innerHTML = "Multiplication of "+a +" "+"and"+" "+c+" "+"is:"+" "+(a * c);
    document.body.appendChild(multiply);
    multiply.style.fontSize = "24px";
    multiply.style.fontFamily = "verdana"
}
else if (b === '/') {
    var divide = document.createElement('p');
    divide.innerHTML = "Divide of "+a +" "+"and"+" "+c+" "+"is:"+" "+(a / c);
    document.body.appendChild(divide);
    divide.style.fontSize = "24px";
    divide.style.fontFamily = "verdana"
}
else if (b === '%') {
    var modulus = document.createElement('p');
    modulus.innerHTML = "Modulus of "+a +" "+"and"+" "+c+" "+"is:"+" "+(a % c);
    document.body.appendChild(modulus);
    modulus.style.fontSize = "24px";
    modulus.style.fontFamily = "verdana"
}
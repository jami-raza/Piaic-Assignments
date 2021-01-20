var a = parseFloat(prompt("Enter a number to find its Even or Odd"));


var head = document.createElement("h1");
head.innerHTML = "Guess the Number";
document.body.appendChild(head)
document.body.style.textAlign = "center"

if (a % 2 === 0){
    var even = document.createElement("p");
    even.innerHTML = "Even";
    document.body.appendChild(even);
    even.style.color = "green";
    even.style.fontSize = '24px';
}
else {
    var even = document.createElement("p");
    even.innerHTML = "Odd";
    document.body.appendChild(even);
    even.style.color = "red";
    even.style.fontSize = '24px';
}
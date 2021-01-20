var a = parseFloat(prompt("Enter a number to find its Positive, Negative or Zero"));


document.body.style.textAlign = "center";
var head = document.createElement("h1");
head.innerHTML = "Find Number whether its Positive, Negative or Zero";
document.body.appendChild(head)

if (a > 0){
    var positive = document.createElement("p");
    positive.innerHTML = "Number is Positive &#10133;";
    document.body.appendChild(positive);
    positive.style.fontSize = "24px";
    positive.style.fontWeight = "bold";
    positive.style.color = "green"
}
else if(a < 0){
    var negative = document.createElement("p");
    negative.innerHTML = "Number is Negative &#10134;";
    document.body.appendChild(negative);
    negative.style.fontSize = "24px";
    negative.style.fontWeight = "bold";
    negative.style.color = "red"
}
else {
    var zero = document.createElement("p");
    zero.innerHTML = "Zero &#9898;";
    document.body.appendChild(zero);
    zero.style.fontSize = "24px";
    zero.style.fontWeight = "bold";
    zero.style.color = "blue"
}
var a = prompt("Enter a password");
var b = prompt("Enter password again");



document.body.style.textAlign = "center";
var head = document.createElement("h1");
head.innerHTML = "Check Password ";
document.body.appendChild(head)

if (a === b){
    var password = document.createElement("p");
    password.innerHTML = "Correct &#9989;";
    document.body.appendChild(password);
    password.style.fontSize = "24px";
    password.style.color = "green";
    password.style.fontFamily = "Arial"
}
else {
    var password = document.createElement("p");
    password.innerHTML = "In Correct &#10062;";
    document.body.appendChild(password);
    password.style.fontSize = "24px";
    password.style.color = "red";
    password.style.fontFamily = "Arial"
}
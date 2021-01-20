var a = parseInt(prompt("Guess the number between 1 to 10"));
var b = 6

var head = document.createElement("h1");
head.innerHTML = "Guess the Number";
document.body.appendChild(head)
document.body.style.textAlign = "center"

if (a === b){
    var corect = document.createElement("p");
    corect.innerHTML = "&#9989; Correct"
    document.body.appendChild(corect);
    corect.style.fontSize = '24px';
    corect.style.fontWeight = 'bold';
    corect.style.fontFamily = "Arial"
    corect.style.color = "green"
}
else if (a === --b){
    var corect = document.createElement("p");
    corect.innerHTML = "&#10134; Close"
    document.body.appendChild(corect);
    corect.style.fontSize = '24px';
    corect.style.fontWeight = 'bold';
    corect.style.fontFamily = "Arial"
    corect.style.color = "yellowgreen"
}
else if(a === b+2){
    var corect = document.createElement("p");
    corect.innerHTML = "&#10133; Very Close"
    document.body.appendChild(corect);
    corect.style.fontSize = '24px';
    corect.style.fontWeight = 'bold';
    corect.style.fontFamily = "Arial"
    corect.style.color = "blue"
}
else {
    var corect = document.createElement("p");
    corect.innerHTML = "&#10062; In Correct"
    document.body.appendChild(corect);
    corect.style.fontSize = '24px';
    corect.style.fontWeight = 'bold';
    corect.style.fontFamily = "Arial"
    corect.style.color = "red"
}
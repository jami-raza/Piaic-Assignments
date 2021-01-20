var time = parseFloat(prompt("Enter your time"));


document.body.style.textAlign = "center";
var head = document.createElement("h1");
head.innerHTML = "Message on Time";
document.body.appendChild(head)

if (time >= 0000 && time < 1200) {
    var good = document.createElement("p");
    good.innerHTML = "&#127748; Good Morning";
    document.body.appendChild(good);
    good.style.color = "blue"
    good.style.fontSize = "24px";
    good.style.fontFamily = "Arial"
}
else if(time >= 1200 && time < 1700){
    var good = document.createElement("p");
    good.innerHTML = "&#127774; Good Afternoon";
    document.body.appendChild(good);
    good.style.color = "yellowgreen"
    good.style.fontSize = "24px";
    good.style.fontFamily = "Arial"
}
else if(time >= 1700 && time < 2100){
    var good = document.createElement("p");
    good.innerHTML = "&#127749; Good Evening";
    document.body.appendChild(good);
    good.style.color = "cyan"
    good.style.fontSize = "24px";
    good.style.fontFamily = "Arial"
}
else {(time >= 2100 && time <= 2359) 
    var good = document.createElement("p");
    good.innerHTML = "&#127769; Good Night";
    document.body.appendChild(good);
    good.style.color = "grey"
    good.style.fontSize = "24px";
    good.style.fontFamily = "Arial"
}

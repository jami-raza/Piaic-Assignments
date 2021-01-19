var signal_color = prompt("Enter one color of road signal");

if (signal_color === "red" || signal_color === "Red") {
    var a = document.createElement("p");
    a.innerHTML = "Must Stop";
    document.body.appendChild(a);
    a.style.color = "red";
} else if (signal_color === "yellow" || signal_color === "Yellow") {
    var b = document.createElement("p");
    b.innerHTML = "Ready to move";
    document.body.appendChild(b);
    b.style.color = "#e1ad01";
} else if (signal_color === "green" || signal_color === "Green") {
    var c = document.createElement("p");
    c.innerHTML = "Move now";
    document.body.appendChild(c)
    c.style.color = "green";
}else (alert("No! write the correct color"))

var heading = document.createElement("h1");
heading.innerHTML = "Signal Color Message";
document.body.append(heading);
document.body.style.textAlign = "center";
document.body.style.fontSize = "24px";
document.body.style.fontWeight = "bold";



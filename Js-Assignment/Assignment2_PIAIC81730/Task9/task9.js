var a = prompt("Enter alphabet to check Vowel");

document.body.style.textAlign = "center";
var head = document.createElement("h1");
head.innerHTML = "Find Vowel";
document.body.appendChild(head)

if (
  a === "a" ||
  a === "A" ||
  a === "e" ||
  a === "E" ||
  a === "i" ||
  a === "I" ||
  a === "o" ||
  a === "O" ||
  a === "u" ||
  a === "U"
) {
  var vowel = document.createElement("p");
    vowel.innerHTML = "Its Vowel";
    document.body.appendChild(vowel);
    vowel.style.fontWeight = "bold";
    vowel.style.color = "green";
    vowel.style.fontSize = "24px"
}
else {
    var consequent = document.createElement("p");
    consequent.innerHTML = "It is not a Vowel";
    document.body.appendChild(consequent);
    consequent.style.fontWeight = "bold";
    consequent.style.color = "red";
    consequent.style.fontSize = "24px"
}

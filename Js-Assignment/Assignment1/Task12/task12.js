var Usd_to_Pkr = 155;


var Riyal_to_Pkr = 41;

var h1 = document.createElement("h1");
h1.innerHTML = "Convert Pkr to usd"
document.body.appendChild(h1);
var p1 = document.createElement("p");
p1.innerHTML = "Exchange Rates: 1 USD Dollar =" +" "+Usd_to_Pkr+" " +"and"+" "+"1 Saudi Riyal ="+" "+Riyal_to_Pkr;
document.body.appendChild(p1);
var p2 = document.createElement("p");
p2.innerHTML = "Total Currency in PKR is:"+" "+(Usd_to_Pkr*10+Riyal_to_Pkr*25)
document.body.appendChild(p2); 
var studNames = ["Ali","Ahmed","Usman"];
var studScore = [311,208,450];



var c = document.createElement("h2");
c.innerHTML = "Score and Names are listed in array";
document.body.append(c)
c.style.fontFamily = "sans-serif"

for (i = 0; i < studNames.length;i++){
    
    var a = document.createElement("h3");
    a.innerHTML = "Score of " + studNames[i] + " is " + studScore[i] + "." + " "+"Percentage: "+ ((studScore[i] * 100) / 500)+"%";
    document.body.append(a)
    a.style.fontFamily = "Arial"
}
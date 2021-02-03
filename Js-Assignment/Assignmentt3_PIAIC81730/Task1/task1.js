var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

var a = document.createElement("h1");
a.innerHTML = "Qualifications";
document.body.append(a);
document.body.style.textAlign = "center"



for(var i = 0; i < qualification.length ;i++) {
    
    var c = document.createElement("h3");
    c.innerHTML = i+") "+qualification[i];
    document.body.append(c)
    c.style.textAlign = "left"
    c.style.margin = "2% 40% 0 40%"
}
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st","nd","rd","th"];

function choice(){

    for(var i =1; i < aCities.length+1; i++){
        for (var j = 1; j < aCities.length -1; j++){
            var a = o[i]
            var b = j
             console.log(j)
        }
        
        console.log("Cities: "+i+a+aCities[i])
    }
    
}
choice()

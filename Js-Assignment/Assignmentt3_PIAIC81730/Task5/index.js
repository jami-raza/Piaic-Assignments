
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(arr1)
var ele = document.createElement("p");
ele.innerHTML = "Initial Array: " + arr1;
ele.style.fontSize = "20px";
ele.style.fontFamily = "Arial";
document.body.append(ele);

function removeDuplicate() {

    var unique = [];
    for(var i = 0; i < arr1.length -1; i++) {
        if(unique.indexOf(arr1[i]) === -1){
            unique.push(arr1[i])
        }
        
    }

    var a = document.createElement("p");
    a.style.fontSize = "20px";
    a.style.fontFamily = "Arial";
    a.innerHTML = "Remove Duplicate values: "+unique;
    document.body.append(a)
console.log(unique)
    

} 


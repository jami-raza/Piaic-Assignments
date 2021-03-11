var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]

console.log(a.concat(b))

var c = [];
var d = a.concat(b)
 
for(var i = 0; i < d.length -1; i++){
    if(c.indexOf(d[i])=== -1){
        c.push(d[i])
    }
    
}
c.sort(function(a,b){return a-b})
console.log(c)
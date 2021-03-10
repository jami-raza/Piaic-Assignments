var cities = ["Karachi","Islamabad","Lahore","Quetta","Hyderabad"];

var select1 = (prompt("Enter city name which you want to select: "+ cities))
var select2 = (prompt("Enter city name which you want to select: "+ cities));
var select3 = (prompt("Enter city name which you want to select: "+ cities));

//convert selection into capitalize

var slect1 = select1.charAt(0).toUpperCase() + select1.substring(1)
var slect2 = select2.charAt(0).toUpperCase() + select2.substring(1)
var slect3 = select3.charAt(0).toUpperCase() + select3.substring(1)
var selected = [slect1,slect2,slect3]
var response = cities.filter(item => selected.includes(item))
console.log(response)
var array = document.createElement("h1");
array.innerHTML = "Cities: " + cities;
array.style.fontFamily = 'Arial'
document.body.append(array)
var array2 = document.createElement("h2");
array2.innerHTML = "Selected Cities: " + response;
array2.style.fontFamily = 'Arial'
document.body.append(array2)





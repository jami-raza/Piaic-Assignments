var initialArray = ["Red", "Green", "Yellow"];
//unshift for add element in array at first index
//push for add element in array at last index
function output() {
  initialArray.unshift(prompt("Enter Color to add in first Index"));
  initialArray.push(prompt("Enter Color to add last index"));
  var addFirst = document.createElement("div");
  addFirst.innerHTML = "Add Item in first and Last index at array: " + " " + initialArray;
  addFirst.style.display = "flex";
  addFirst.style.flexDirection = "row";
  addFirst.style.justifyContent = "center";
  addFirst.style.backgroundColor = "green";
  addFirst.style.color = initialArray[0];
  document.body.append(addFirst);
  console.log(initialArray.length);
  document.getElementById("addfirstandlast").style.display = "none";
  document.getElementById("addmore").style.display = "block";
}
function Addmore() {
  initialArray.unshift(prompt("Enter Color to add in first Index"));
  initialArray.unshift(prompt("Enter Color to add in first Index"));
  var addFirst = document.createElement("div");
  addFirst.innerHTML = "Two More Colors added in first index:" + " " + initialArray;
  addFirst.style.display = "flex";
  addFirst.style.flexDirection = "row";
  addFirst.style.justifyContent = "center";
  addFirst.style.backgroundColor = "green";
  addFirst.style.color = initialArray[0];
  document.body.append(addFirst);
  console.log(initialArray.length);
  document.getElementById("addmore").style.display = "none";
  document.getElementById("deleteFirst").style.display = "block";
}

setTimeout(output, 2000);


//shift for delete element in array at first index

function deleteFirst() {
  initialArray.shift();

  var addFirst = document.createElement("div");
  addFirst.innerHTML = "Delete color in first index:" + " " + initialArray;
  addFirst.style.display = "flex";
  addFirst.style.flexDirection = "row";
  addFirst.style.justifyContent = "center";
  addFirst.style.backgroundColor = "green";
  addFirst.style.color = initialArray[0];
  document.body.append(addFirst);
  console.log(initialArray.length);
  document.getElementById("deleteFirst").style.display = "none";
  document.getElementById("deleteLast").style.display = "block";
}
//pop for delete element in array at last index
function deleteLast() {
  initialArray.pop();

  var addFirst = document.createElement("div");
  addFirst.innerHTML = "Delete color in last index:" + " " + initialArray;
  addFirst.style.display = "flex";
  addFirst.style.flexDirection = "row";
  addFirst.style.justifyContent = "center";
  addFirst.style.backgroundColor = initialArray[0];
  addFirst.style.color = initialArray[4];
  document.body.append(addFirst);
  console.log(initialArray.length);
  document.getElementById("deleteLast").style.display = "none";
  document.getElementById("addindexcolor").style.display = "block";
}
/* splice is use to add and delete element it takes 3 parameters first for starting index, 
second for remove index number and third is string which pass element to add in first parameter index*/

function addIndexColor() {
  var indexInput = parseFloat(
    prompt("Enter Index Number To Add a Colour in Array")
  );

  var index = prompt("Enter a Colour Name");
  /*
    if(!indexInput === index){
        prompt("Enter a Colour Name")
    } else {
        window.alert("please")
    }*/
  initialArray.splice(indexInput, 0, index);
  console.log(initialArray);
  var addFirst = document.createElement("div");
  addFirst.innerHTML = "Your colour is " + indexInput + " index"+" " + initialArray;
  addFirst.style.display = "flex";
  addFirst.style.flexDirection = "row";
  addFirst.style.justifyContent = "center";
  addFirst.style.backgroundColor = "white";
  addFirst.style.color = initialArray[indexInput];
  document.body.append(addFirst);
  console.log(initialArray.length);
  document.getElementById("addindexcolor").style.display = "none";
  document.getElementById("deleteindexcolor").style.display = "block";
}
function deleteIndexColor() {
  var index = parseFloat(prompt("Enter Index Number To delete Color"));

  var indexInput = parseFloat(prompt("How many colours you want to delete ?"));

  initialArray.splice(index, indexInput);
  console.log(initialArray);
  var addFirst = document.createElement("div");
  addFirst.innerHTML = "Your index number starting is: " + index + " " + initialArray;
  addFirst.style.display = "flex";
  addFirst.style.flexDirection = "row";
  addFirst.style.justifyContent = "center";
  addFirst.style.backgroundColor = "white";
  addFirst.style.border = "1px solid black";
  addFirst.style.color = "blue";
  document.body.append(addFirst);
  console.log(initialArray.length);
  document.getElementById("addindexcolor").style.display = "none";
  document.getElementById("deleteindexcolor").style.display = "none";
  document.getElementById("addfirstandlast").style.display = "block";
}
document.getElementById("addfirstandlast").style.display = "none";
document.getElementById("deleteindexcolor").style.display = "none";
document.getElementById("addindexcolor").style.display = "none";
document.getElementById("deleteLast").style.display = "none";
document.getElementById("deleteFirst").style.display = "none";
document.getElementById("addmore").style.display = "none";
console.log(initialArray.length);

var element = document.createElement("div");
element.innerHTML = "Initial Array:  " + initialArray;
element.style.display = "flex";
element.style.flexDirection = "row";
element.style.justifyContent = "center";
element.style.backgroundColor = "cyan";

document.body.append(element);

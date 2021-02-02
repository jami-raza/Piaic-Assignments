var heading = "Rules for naming JS variables";
var variables = ["$", "numbers", "_", "letter","sensitive","keywords"];

document.getElementById("h1").innerHTML = heading;
document.getElementById("p").innerHTML =
  "Variable name can only contain" +
  " " +
  variables[1] +
  " ," +
  " " +
  variables[0] +
  ", " +
  "and" +
  " " +
  variables[2] +
  "." +
  "For example : $my_1stVariable.";
document.getElementById("p1").innerHTML =
  "Variables must begin with a" +
  " " +
  variables[3] +
  ", " +
  variables[0] +
  ", or " +
  variables[2] + " . " + "For example $name, _name or name";
document.getElementById("p2").innerHTML = "Variable names are case" + " " + variables[4]
document.getElementById("p3").innerHTML = "Variable names should not be JS" + " " + variables[5]
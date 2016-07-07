$(function() {
document.getElementById("first").onkeyup = function() 
{
myFunction();
}
function myFunction() {
var f = document.getElementById("first").value;
document.getElementById("second").value = f;
     var a = f
    var value = a.split("");
    document.getElementById("first").innerHTML = value;
}
}
);

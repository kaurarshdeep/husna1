$(function() {
document.getElementById("first").onkeyup = function() 
{
myFunction();
splitfunc();
}
});
function myFunction() {
<<<<<<< HEAD
var f = document.getElementById("first").value;
document.getElementById("first2").value = f;
    
    var a = f.split("");
    document.getElementById("first").innerHTML = a;
=======
 f = document.getElementById("first").value;
document.getElementById("second").value = f;
>>>>>>> dd5a9ba060d8f3d9450c8f3936dc2eb8c2b3d7b6
}

function splitfunc() {
     
   a = f.split(" ");
console.log(a);
    document.getElementById("second").innerHTML = a;
}
   
    



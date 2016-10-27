function insertTextInInputValue(buttonValueIs){
             var inputElementIs = document.getElementById("psearch");
            inputElementIs.value = inputElementIs.value + buttonValueIs;
        }
function eraseText() {
    var value = document.getElementById("psearch").value;
    document.getElementById("psearch").value = value.substr(0, value.length - 1);
}


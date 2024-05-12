function changeSize() {
    alert("Hello, world! (We made the font bigger)");
    document.getElementById("textField").style.fontSize = "24pt"  
}

function uppercases() {
    var textAreaValue = document.getElementById("textField").value;
    var modifiedValue = textAreaValue.toUpperCase().split(". ");
    var modifiedValue = modifiedValue.join("Moo.");
    document.getElementById("textField").value = modifiedValue; // im so glad this makes sense to me you have no idea ;_;
}

function fancy() {
    alert("You pressed the FancyShmancy button!");
    document.getElementById("textField").style.fontWeight = "bold"
    document.getElementById("textField").style.color = "blue"
    document.getElementById("textField").style.textDecoration = "underline"
}

function boring() {
    alert("You pressed the BoringBetty button!");
    document.getElementById("textField").style.fontWeight = "normal"
}

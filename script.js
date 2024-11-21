document.getElementById("color-input").addEventListener("input", function(event){
    // Select Target from input
    let selectedColor = event.target.value
    
    // update the color text
    document.getElementById("colorCode").textContent = selectedColor

    // update background color of the display

    document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})
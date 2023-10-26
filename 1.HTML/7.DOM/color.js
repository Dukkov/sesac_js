function changeColor(a) {
    var textElement = document.getElementById("myText");
    if (a === 1)
        textElement.style.color = "red";
    if (a === 2)    
        textElement.style.color = "blue";
    if (a === 3) {
        if (textElement.style.color === "red")
            textElement.style.color = "blue";
        else
            textElement.style.color = "red";
    }
}

function addElement() {
    var new_div = document.createElement("div");
    new_div.className = "mydiv";
    new_div.textContent = "새로운 내용";
    document.body.appendChild(new_div); 
}

function myFunc() {
    console.log(window.innerWidth,  window.innerHeight);
    console.log(screen.width, screen.height);
}
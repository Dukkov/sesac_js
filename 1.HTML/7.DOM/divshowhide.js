function showHide() {
    divElement = document.getElementById("myDiv");
    buttonText = document.getElementById("myButton").innerText;
    if (divElement.style.display === "none") {
        divElement.style.display = "block";
        buttonText = "hide";
    }
    else {
        divElement.style.display = "none";  
    }
}

window.onload = function() {
    setTimeout(function() {
        location.reload();
    }, 3000);
}
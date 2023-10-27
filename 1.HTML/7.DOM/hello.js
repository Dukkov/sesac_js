function sayHello() {
    console.log("Hello");
    my_tag = document.createElement("p");
    document.body.append(my_tag);
}

function fruitDisplay() {
    var result = document.getElementById("fruit").value;
    console.log(result);
    switch (result) {
        case "apple":
            document.body.append("사과");
            break;
        case "orange":
            document.body.append("오렌지");
            break;
        case "grape":
            document.body.append("포도");
            break;
    }
}
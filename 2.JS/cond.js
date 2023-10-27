let score = "65";
console.log("-----if-----");
if (score >= 90)
    console.log("A");
else if (score >= 80)
    console.log("B");
else if (score >= 70)
    console.log("C");
else if (score >= 60)
    console.log("D");
else
    console.log("You Failed!");

console.log("-----switch-----");
score = 80;
switch(score) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
}
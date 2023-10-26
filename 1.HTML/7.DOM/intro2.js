function number_inc () {
    console.log("버튼 클릭");
    result = document.getElementById('result1').innerHTML;
    document.getElementById('result1').innerHTML = parseInt(result) + 1;
}

function number_dec () {
    result = document.getElementById('result2').innerHTML;
    document.getElementById('result2').innerHTML = parseInt(result) - 1;
}
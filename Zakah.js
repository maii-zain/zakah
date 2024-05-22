function calZakah() {
    var total = parseFloat(document.getElementById('ZakahInput').value);
    var zakah = total * 0.025;


    // Display the result
    var resultElement = document.getElementById('result').innerHTML="<h3>قيمة الذكاة التي يجب عليك اخراجها هي: " + zakah + "</h3>";
    // resultElement.innerHTML = "<h3>قيمة الذكاة التي يجب عليك اخراجها هي: " + zakah + "</h3>";

}


document.getElementById('ZakahInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        calZakah();
    }
});
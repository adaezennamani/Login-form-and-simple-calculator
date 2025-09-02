function calculate() {
    let n1 =
    document.getElementById("number").value;
    let n2 =
    document.getElementById("number2").value;

    //using parseFloat to convert the above strings into numbers
    let number = parseFloat(n1);
    let number2 = parseFloat(n2);

    //check if either input is a valid number

    if (isNaN(number) || isNaN(number2)) {
        alert("Please input a valid number");
        return;
    }

//valid numbers will multiply when you click the calculate button
     total.value = (number) * (number2)


}
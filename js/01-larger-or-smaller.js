/*eslint-env browser*/
number1 = parseInt(window.prompt("Enter the first number"));
number2 = parseInt(window.prompt("Enter the second number"));

if(number1 == NaN || number2 == NaN) {
    window.document.write("Invalid");
}
else if(number1 === number2) {
    window.document.write("Both the numbers are equal");
}
else {
    window.document.write("The larger number is " +(number1 > number2 ? number1 : number2));
}
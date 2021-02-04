var num1 = prompt("Please enter first number.");
var num2 = prompt("Please enter second number.");

add = Number(num1) + Number(num2);
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
console.log(num1, num2)
document.write(`<p>${num1} plus ${num2} equals ${add}</p>
                <p>${num1} minus ${num2} equals ${sub}</p>
                <p>${num1} times ${num2} equals ${mult}</p>
                <p>${num1} divided by ${num2} equals ${div}</p>`);

            
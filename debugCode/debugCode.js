function performOperation(){
    let num1=parseInt(document.getElementById('input1').value);
    let num2=parseInt(document.getElementById('input2').value);

    debugger;
    let number1=parseFloat(num1);
    let number2=parseFloat(num2);

    if (!isNaN(number1)&& !isNaN(number2)){
        let product=multiply(number1,number2);
        let sum=add(number1,number2);
        let div = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";

        displayResult(product,sum,div);
    }else{
        displayResult('Please enter valid numbers');
    }
}

function multiply(a,b){
    debugger;
    return a*b;
}

function add(a,b){
    debugger;
    return a+b;
}


function displayResult(product,sum,div){
    const resultElement = document.getElementById('result');
            resultElement.innerHTML = `
                <strong>Results:</strong><br>
                Addition: ${sum} <br>
                Multiplication: ${product} <br>
                Division: ${div}
            `;}
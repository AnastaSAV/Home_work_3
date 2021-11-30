let firstNumber = prompt('Enter any number');
let secondNumber = prompt('Enter any number again');
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
// alert(Number(firstNumber) + Number(secondNumber)); //Работает
// alert(parseInt(firstNumber + secondNumber)); // И так работает
let result = firstNumber + secondNumber;
alert(`${firstNumber} + ${secondNumber} = ${result}`) // Этот вариант кажется более правильным
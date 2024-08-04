let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  operand1 = '';
  operand2 = '';
  operator = '';
}

function calculate() {
  let expression = display.value;
  let parts = expression.match(/[+\-*/]/);
  
  if (parts && parts.length === 1) {
    operator = parts[0];
    let operands = expression.split(operator);
    operand1 = parseFloat(operands[0]);
    operand2 = parseFloat(operands[1]);
    
    switch (operator) {
      case '+':
        display.value = operand1 + operand2;
        break;
      case '-':
        display.value = operand1 - operand2;
        break;
      case '*':
        display.value = operand1 * operand2;
        break;
      case '/':
        display.value = operand1 / operand2;
        break;
      default:
        break;
    }
  } else {
    display.value = 'Error';
  }
}

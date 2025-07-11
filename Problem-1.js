class Calculator {
  constructor() {}

  calculation(a, b, oper) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Please enter only numbers');
    }
    let result;
    try {
        oper = oper.toLowerCase();
        switch (oper) {
        case 'addition':
        case 'add':
        case '+':
            result = a + b;
            break;

        case 'subtraction':
        case 'subtract':
        case '-':
            result = a - b;
            break;

        case 'multiplication':
        case 'multiply':
        case '*':
            result = a * b;
            break;

        case 'division':
        case 'divide':
        case '/':
            if (b === 0) {
            throw new Error('Division by zero is not allowed');
            }
            result = a / b;
            break;

        default:
            throw new Error('Invalid operation. Please use: addition, subtraction, multiplication, or division');
    }

    } catch (error) {
        console.error('Error:', error.message); 
    }
    return result;
  }
}

const calc = new Calculator();
console.log('5 + 3 =', calc.calculation(5, 3, 'addition'));       
console.log('10 - 4 =', calc.calculation(10, 4, 'subtract'));      
console.log('7 * 6 =', calc.calculation(7, 6, '*'));              
console.log('15 / 3 =', calc.calculation(15, 3, 'division'));    
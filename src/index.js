/**
 * Simple calculator module
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Export functions for use in other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide
};

// If running directly, demonstrate the functions
if (require.main === module) {
  console.log('Simple Calculator Demo');
  console.log('====================');
  console.log(`5 + 3 = ${add(5, 3)}`);
  console.log(`10 - 4 = ${subtract(10, 4)}`);
  console.log(`6 * 7 = ${multiply(6, 7)}`);
  console.log(`15 / 3 = ${divide(15, 3)}`);
}

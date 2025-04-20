const CalculatorClient = require('./index');

async function main() {
  // Create a client instance with default API endpoint
  const calculator = new CalculatorClient();
  
  try {
    // Addition example
    console.log('Performing addition: 10 + 5');
    const addResult = await calculator.add(10, 5);
    console.log('Addition result:', addResult);
    console.log('-----------------------------------');
    
    // Subtraction example
    console.log('Performing subtraction: 10 - 5');
    const subtractResult = await calculator.subtract(10, 5);
    console.log('Subtraction result:', subtractResult);
    console.log('-----------------------------------');
    
    // Error handling example - invalid input
    try {
      console.log('Trying invalid input: "abc" + 5');
      await calculator.add('abc', 5);
    } catch (error) {
      console.log('Error caught successfully:', error.message);
    }
    
  } catch (error) {
    console.error('Unexpected error:', error.message);
  }
}

main().catch(console.error); 
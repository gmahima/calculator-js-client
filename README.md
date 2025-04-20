# Calculator Client

A JavaScript client for the [Calculator API](https://calculator-server-l9ij.onrender.com).

## Features

- Simple interface for calculator operations (add, subtract)
- Works in both Node.js and browser environments
- Promise-based API
- Built-in input validation
- Configurable API endpoint

## Installation

```bash
npm install gmahima-calculator-client
```

## Usage

### In Node.js

```javascript
const CalculatorClient = require('gmahima-calculator-client');

// Create a client instance
const calculator = new CalculatorClient();

// Use default API endpoint (https://calculator-server-l9ij.onrender.com)
async function calculateExample() {
  try {
    // Add two numbers
    const addResult = await calculator.add(10, 5);
    console.log('Addition result:', addResult);
    // Output: { result: 15, operation: 'add', input: { num1: 10, num2: 5 } }
    
    // Subtract two numbers
    const subtractResult = await calculator.subtract(10, 5);
    console.log('Subtraction result:', subtractResult);
    // Output: { result: 5, operation: 'subtract', input: { num1: 10, num2: 5 } }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

calculateExample();
```

### In the Browser

```html
<script src="node_modules/gmahima-calculator-client/index.js"></script>
<script>
  // Create a client instance
  const calculator = new CalculatorClient();
  
  // Add two numbers
  calculator.add(10, 5)
    .then(result => {
      console.log('Addition result:', result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
    
  // Subtract two numbers  
  calculator.subtract(10, 5)
    .then(result => {
      console.log('Subtraction result:', result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
</script>
```

### With a bundler (webpack, rollup, etc.)

```javascript
import CalculatorClient from 'gmahima-calculator-client';

// Create a client instance
const calculator = new CalculatorClient();

// Use the client as shown in the Node.js example
```

### Custom API Endpoint

You can specify a custom API endpoint:

```javascript
const calculator = new CalculatorClient({
  baseUrl: 'http://localhost:3000'
});
```

## API Reference

### `new CalculatorClient(options)`

Creates a new Calculator API client.

#### Options

- `baseUrl` (String): The base URL of the Calculator API (default: 'https://calculator-server-l9ij.onrender.com')

### `calculator.add(num1, num2)`

Add two numbers.

#### Parameters

- `num1` (Number): First number
- `num2` (Number): Second number

#### Returns

- (Promise): Resolves to an object with the addition result:
  ```javascript
  {
    result: 15,        // The sum of num1 and num2
    operation: 'add',  // The operation performed
    input: {           // The input values
      num1: 10,
      num2: 5
    }
  }
  ```

### `calculator.subtract(num1, num2)`

Subtract num2 from num1.

#### Parameters

- `num1` (Number): First number
- `num2` (Number): Second number

#### Returns

- (Promise): Resolves to an object with the subtraction result:
  ```javascript
  {
    result: 5,             // The difference between num1 and num2
    operation: 'subtract', // The operation performed
    input: {               // The input values
      num1: 10,
      num2: 5
    }
  }
  ```

## License

MIT 
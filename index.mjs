/**
 * Calculator API Client
 * A JavaScript client for the Calculator API
 */

// Import node-fetch for Node.js environments if needed
let fetchImplementation;
if (typeof window === 'undefined') {
  // In Node.js ESM, we use dynamic import
  try {
    // This will only work in Node.js
    fetchImplementation = globalThis.fetch;
  } catch (error) {
    console.warn('Native fetch not available, falling back to node-fetch');
    // Will be handled at runtime with dynamic import
  }
} else {
  // Browser environment
  fetchImplementation = window.fetch.bind(window);
}

class CalculatorClient {
  /**
   * Create a new CalculatorClient instance
   * @param {Object} options - Configuration options
   * @param {string} options.baseUrl - The base URL of the Calculator API
   */
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || 'https://calculator-server-l9ij.onrender.com';
    this.fetchPromise = null;
    
    // Setup fetch for Node.js when native fetch is not available
    if (typeof window === 'undefined' && !fetchImplementation) {
      this.fetchPromise = import('node-fetch').then(module => {
        fetchImplementation = module.default;
        return fetchImplementation;
      });
    }
  }

  /**
   * Make a request to the Calculator API
   * @private
   * @param {string} endpoint - The API endpoint
   * @param {Object} data - The request payload
   * @returns {Promise<Object>} - The API response
   */
  async _request(endpoint, data) {
    const url = `${this.baseUrl}${endpoint}`;
    
    // If we're in Node.js and need to load fetch, wait for it
    if (this.fetchPromise) {
      await this.fetchPromise;
    }
    
    try {
      const response = await fetchImplementation(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Add two numbers
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @returns {Promise<Object>} - The addition result
   */
  async add(num1, num2) {
    // Validate input
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both num1 and num2 must be numbers');
    }

    return this._request('/api/calculate/add', { num1, num2 });
  }

  /**
   * Subtract two numbers
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @returns {Promise<Object>} - The subtraction result
   */
  async subtract(num1, num2) {
    // Validate input
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both num1 and num2 must be numbers');
    }

    return this._request('/api/calculate/subtract', { num1, num2 });
  }
}

export default CalculatorClient; 
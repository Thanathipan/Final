// Import the jsonwebtoken library
const jwt = require('jsonwebtoken');

// Define a payload (data you want in the token)
const payload = {
  id: 123,                   // User ID or unique identifier
  username: 'thana',         // Username or any other user data
  role: 'admin'              // User role or permissions
};

// Secret key for signing the token
const secretKey = 'your-very-secure-secret-key';

// Token options (e.g., expiration time)
const options = {
  expiresIn: '1h' // Token expires in 1 hour
};

// Generate the token
const token = jwt.sign(payload, secretKey, options);

// Print the token
console.log('Generated JWT Token:', token);

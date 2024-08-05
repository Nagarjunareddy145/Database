 
const jwt = require('jsonwebtoken');

// Step 1: Create a JWT
const createToken = (user) => {
  const payload = {// payload for the request payload (optional)
    username: user.username,
    role: user.role,
  };

  // Secret key (In a real app, keep this secret safe)
  const secretKey = 'arjun';

  // Token expiration time (e.g., 1 hour)
  const options = { expiresIn: '30min' };

  // Create the token
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

// Step 2: Verify a JWT
const verifyToken = (token) => {
  try {
    const secretKey = 'arjun';
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
};

// Example usage
const user = { username: 'nagaarjuna', role: 'admin' };
const token = createToken(user);

console.log('Generated JWT:', token);

const verifiedData = verifyToken(token);
if (verifiedData) {
  console.log('Verified Token Data:', verifiedData);
} else {
  console.log('Invalid Token');
}
 
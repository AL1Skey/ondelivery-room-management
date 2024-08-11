const jwt = require('jsonwebtoken');

// Generate a JWT token
function generateToken(payload, secretKey=process.env.JWT_SECRET, expiresIn) {
    return jwt.sign(payload, secretKey, { expiresIn });
}

// Verify a JWT token
function verifyToken(token, secretKey=process.env.JWT_SECRET) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Invalid token');
    }
}

module.exports = {
    generateToken,
    verifyToken,
};
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES = process.env.JWT_EXPIRES

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}
if (!JWT_EXPIRES) {
    throw new Error("JWT_EXPIRES is not defined in environment variables");
}
// Generate token
function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

// Verify token
function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null; // invalid or expired
    }
}

module.exports = { generateToken, verifyToken };

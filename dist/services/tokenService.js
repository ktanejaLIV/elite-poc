"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateConfirmationToken = generateConfirmationToken;
exports.validateConfirmationToken = validateConfirmationToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'my_super_secret';
// Generate a JWT token for a member and confirmation
function generateConfirmationToken(memberId, confirmationId) {
    const payload = { memberId, confirmationId };
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '14d' }); // 14-day expiry
}
// Validate a token
function validateConfirmationToken(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return decoded; // returns { memberId, confirmationId, iat, exp }
    }
    catch (err) {
        console.error('Invalid or expired token', err);
        return null;
    }
}

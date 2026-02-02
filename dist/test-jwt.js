"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenService_1 = require("./services/tokenService");
const memberId = '12345';
const confirmationId = 'abcde';
// Generate token
const token = (0, tokenService_1.generateConfirmationToken)(memberId, confirmationId);
console.log('Generated token:', token);
// Validate token
const decoded = (0, tokenService_1.validateConfirmationToken)(token);
console.log('Decoded token:', decoded);
// Test invalid token
const invalid = (0, tokenService_1.validateConfirmationToken)(token + 'wrong');
console.log('Invalid token test:', invalid);

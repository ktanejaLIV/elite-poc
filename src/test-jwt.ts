import { generateConfirmationToken, validateConfirmationToken } from './services/tokenService';

const memberId = '12345';
const confirmationId = 'abcde';

// Generate token
const token = generateConfirmationToken(memberId, confirmationId);
console.log('Generated token:', token);

// Validate token
const decoded = validateConfirmationToken(token);
console.log('Decoded token:', decoded);

// Test invalid token
const invalid = validateConfirmationToken(token + 'wrong');
console.log('Invalid token test:', invalid);

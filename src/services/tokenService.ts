import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'my_super_secret';

// Generate a JWT token for a member and confirmation
export function generateConfirmationToken(memberId: string, confirmationId: string) {
  const payload = { memberId, confirmationId };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '14d' }); // 14-day expiry
}

// Validate a token
export function validateConfirmationToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // returns { memberId, confirmationId, iat, exp }
  } catch (err) {
    console.error('Invalid or expired token', err);
    return null;
  }
}

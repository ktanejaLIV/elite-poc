"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJobChangeEmail = sendJobChangeEmail;
// src/services/emailService.ts
const mail_1 = __importDefault(require("@sendgrid/mail"));
if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not set in environment variables');
}
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
async function sendJobChangeEmail(memberEmail, token, proposedEmployer, proposedTitle) {
    const msg = {
        to: memberEmail,
        from: 'ktaneja@liventus.com',
        subject: 'We noticed you started at a new company - Please confirm',
        text: `Hello, we noticed you started at a new company (${proposedEmployer}) as ${proposedTitle}. 
Please confirm your job change by clicking the link below:\n\n http://localhost:3000/confirmations/${token}/confirm`,
        html: `<p>Hello, we noticed you started at a new company <b>${proposedEmployer}</b> as <b>${proposedTitle}</b>.</p>
               <p>Please confirm your job change by clicking the link below:</p>
               <a href="http://localhost:3000/confirmations/${token}/confirm">Confirm Job Change</a>`
    };
    try {
        await mail_1.default.send(msg);
        console.log(`Job change confirmation email sent to ${memberEmail}`);
        return true;
    }
    catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

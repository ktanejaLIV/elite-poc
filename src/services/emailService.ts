// src/services/emailService.ts
import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not set in environment variables');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendJobChangeEmail(
    memberEmail: string,
    token: string,
    proposedEmployer: string,
    proposedTitle: string
) {
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
        await sgMail.send(msg);
        console.log(`Job change confirmation email sent to ${memberEmail}`);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

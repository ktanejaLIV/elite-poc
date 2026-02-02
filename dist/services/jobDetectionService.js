"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectJobChanges = detectJobChanges;
const client_1 = require("@prisma/client");
const apolloService_1 = require("./apolloService");
const emailService_1 = require("./emailService"); // add this import
const prisma = new client_1.PrismaClient();
async function detectJobChanges() {
    const members = await prisma.member.findMany();
    const results = [];
    for (const member of members) {
        const jobData = await (0, apolloService_1.fetchJobChange)(member.email);
        if (jobData?.jobChanged) {
            results.push(jobData);
            // -------------------------------
            // SEND EMAIL TO YOUR KTANEJA EMAIL
            // -------------------------------
            await (0, emailService_1.sendJobChangeEmail)('ktaneja@liventus.com', // recipient (you)
            jobData.token, // token for confirmation link
            jobData.currentEmployer, // proposed employer
            jobData.currentTitle // proposed title
            );
        }
    }
    return {
        checked: members.length,
        changesDetected: results.length,
        details: results
    };
}

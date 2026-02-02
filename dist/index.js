"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const jobDetectionService_1 = require("./services/jobDetectionService");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// ----------------------
// Health check
// ----------------------
app.get('/api/health', (_req, res) => {
    res.send('Server is running');
});
// ----------------------
// Job detection
// ----------------------
app.post('/api/detect-job-changes', async (_req, res) => {
    try {
        const result = await (0, jobDetectionService_1.detectJobChanges)();
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Job detection failed' });
    }
});
// ----------------------
// Confirm job change via token
// ----------------------
app.post('/api/confirmations/:token/confirm', async (req, res) => {
    // Force TypeScript to treat token as string
    const token = Array.isArray(req.params.token) ? req.params.token[0] : req.params.token;
    try {
        const confirmation = await prisma.pendingConfirmation.findUnique({
            where: { confirmationToken: token },
        });
        if (!confirmation)
            return res.status(404).json({ error: 'Token not found' });
        if (confirmation.status === 'confirmed')
            return res.status(400).json({ error: 'Already confirmed' });
        // Update member with new job info
        await prisma.member.update({
            where: { id: confirmation.memberId },
            data: {
                currentEmployer: confirmation.proposedEmployer,
                currentTitle: confirmation.proposedTitle,
            },
        });
        // Mark confirmation as confirmed
        await prisma.pendingConfirmation.update({
            where: { confirmationToken: token },
            data: {
                status: 'confirmed',
                confirmedAt: new Date(),
            },
        });
        res.json({ success: true, memberId: confirmation.memberId });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Confirmation failed' });
    }
});
// ----------------------
// CRUD for Members
// ----------------------
// GET all members with pending confirmations
app.get('/api/members', async (_req, res) => {
    try {
        const members = await prisma.member.findMany({
            include: { pendingConfirmations: true },
        });
        res.json(members);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch members' });
    }
});
// GET single member by ID
app.get('/api/members/:id', async (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id; // fix type
    try {
        const member = await prisma.member.findUnique({
            where: { id },
            include: { pendingConfirmations: true },
        });
        if (!member)
            return res.status(404).json({ error: 'Member not found' });
        res.json(member);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch member' });
    }
});
// POST - Create new member
app.post('/api/members', async (req, res) => {
    const { email, firstName, lastName, currentEmployer, currentTitle, employmentStatus, verificationStatus } = req.body;
    try {
        const newMember = await prisma.member.create({
            data: {
                email,
                firstName,
                lastName,
                currentEmployer,
                currentTitle,
                employmentStatus,
                verificationStatus,
            },
        });
        res.json(newMember);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create member' });
    }
});
// PUT - Update existing member
app.put('/api/members/:id', async (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id; // fix type
    const updates = req.body;
    try {
        const updatedMember = await prisma.member.update({
            where: { id },
            data: updates,
        });
        res.json(updatedMember);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update member' });
    }
});
// DELETE - Remove member
app.delete('/api/members/:id', async (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id; // fix type
    try {
        await prisma.member.delete({ where: { id } });
        res.json({ success: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete member' });
    }
});
// ----------------------
// Start server
// ----------------------
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

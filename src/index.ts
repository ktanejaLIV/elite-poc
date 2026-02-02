// src/index.ts
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { detectJobChanges } from './services/jobDetectionService';
import { sendJobChangeEmail } from './services/emailService'; // optional
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ----------------------
// Swagger setup
// ----------------------
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Elite POC API',
      version: '1.0.0',
      description: 'API documentation for Elite POC',
    },
  },
  apis: ['./src/index.ts'], // routes yahi hain, future me './src/routes/*.ts'
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ----------------------
// Health check
// ----------------------
/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health check
 *     description: Returns server status.
 *     responses:
 *       200:
 *         description: Server running
 */
app.get('/api/health', (_req: Request, res: Response) => {
  res.send('Server is running');
});

// ----------------------
// Job detection
// ----------------------
/**
 * @swagger
 * /api/detect-job-changes:
 *   post:
 *     summary: Detect job changes
 *     description: Checks all members for job changes using Apollo.io.
 *     responses:
 *       200:
 *         description: Job changes detected
 *       500:
 *         description: Job detection failed
 */
app.post('/api/detect-job-changes', async (_req: Request, res: Response) => {
  try {
    const result = await detectJobChanges();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Job detection failed' });
  }
});

// ----------------------
// Confirm job change via token
// ----------------------
/**
 * @swagger
 * /api/confirmations/{token}/confirm:
 *   post:
 *     summary: Confirm job change
 *     description: Confirms a member's proposed job change via token.
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Confirmation token
 *     responses:
 *       200:
 *         description: Confirmation successful
 *       400:
 *         description: Already confirmed
 *       404:
 *         description: Token not found
 */
app.post('/api/confirmations/:token/confirm', async (req: Request, res: Response) => {
  const token = Array.isArray(req.params.token) ? req.params.token[0] : req.params.token;

  try {
    const confirmation = await prisma.pendingConfirmation.findUnique({
      where: { confirmationToken: token },
    });

    if (!confirmation) return res.status(404).json({ error: 'Token not found' });
    if (confirmation.status === 'confirmed')
      return res.status(400).json({ error: 'Already confirmed' });

    await prisma.member.update({
      where: { id: confirmation.memberId },
      data: {
        currentEmployer: confirmation.proposedEmployer,
        currentTitle: confirmation.proposedTitle,
      },
    });

    await prisma.pendingConfirmation.update({
      where: { confirmationToken: token },
      data: {
        status: 'confirmed',
        confirmedAt: new Date(),
      },
    });

    res.json({ success: true, memberId: confirmation.memberId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Confirmation failed' });
  }
});

// ----------------------
// CRUD for Members
// ----------------------

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     description: Returns a list of all members including pending confirmations.
 *     responses:
 *       200:
 *         description: List of members
 */
app.get('/api/members', async (_req: Request, res: Response) => {
  try {
    const members = await prisma.member.findMany({ include: { pendingConfirmations: true } });
    res.json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

/**
 * @swagger
 * /api/members/{id}:
 *   get:
 *     summary: Get single member by ID
 *     description: Returns a single member including pending confirmations.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Member ID
 *     responses:
 *       200:
 *         description: Member found
 *       404:
 *         description: Member not found
 */
app.get('/api/members/:id', async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  try {
    const member = await prisma.member.findUnique({
      where: { id },
      include: { pendingConfirmations: true },
    });
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json(member);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

/**
 * @swagger
 * /api/members:
 *   post:
 *     summary: Create new member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               currentEmployer:
 *                 type: string
 *               currentTitle:
 *                 type: string
 *               employmentStatus:
 *                 type: string
 *               verificationStatus:
 *                 type: string
 *     responses:
 *       200:
 *         description: Member created
 */
app.post('/api/members', async (req: Request, res: Response) => {
  const { email, firstName, lastName, currentEmployer, currentTitle, employmentStatus, verificationStatus } = req.body;
  try {
    const newMember = await prisma.member.create({
      data: { email, firstName, lastName, currentEmployer, currentTitle, employmentStatus, verificationStatus },
    });
    res.json(newMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create member' });
  }
});

/**
 * @swagger
 * /api/members/{id}:
 *   put:
 *     summary: Update member
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Member updated
 *       404:
 *         description: Member not found
 */
app.put('/api/members/:id', async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const updates = req.body;
  try {
    const updatedMember = await prisma.member.update({ where: { id }, data: updates });
    res.json(updatedMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update member' });
  }
});

/**
 * @swagger
 * /api/members/{id}:
 *   delete:
 *     summary: Delete member
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Member deleted
 *       404:
 *         description: Member not found
 */
app.delete('/api/members/:id', async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  try {
    await prisma.member.delete({ where: { id } });
    res.json({ success: true });
  } catch (error) {
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

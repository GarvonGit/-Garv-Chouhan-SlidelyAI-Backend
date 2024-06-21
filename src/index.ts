import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, '../db.json');

app.use(express.json());

// /ping endpoint
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

// /submit endpoint
app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Read existing submissions
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    data.submissions.push({ name, email, phone, github_link, stopwatch_time });

    // Write updated data back to the file
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

    res.json({ success: true });
});

// /read endpoint
app.get('/read', (req: Request, res: Response) => {
    const { index } = req.query;
    const idx = parseInt(index as string, 10);

    if (isNaN(idx)) {
        return res.status(400).json({ error: 'Index must be a number' });
    }

    const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

    if (idx < 0 || idx >= data.submissions.length) {
        return res.status(404).json({ error: 'Index out of bounds' });
    }

    res.json(data.submissions[idx]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Node.js API' });
});

app.use(express.static(join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
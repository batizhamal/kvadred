import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy route or API requests
app.use('/v1', (req, res) => {
  res.redirect(`https://kvadred.onrender.com${req.url}`);
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

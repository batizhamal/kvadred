import { createProxyMiddleware } from 'http-proxy-middleware';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import express from 'express';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(
  '/v1',
  createProxyMiddleware({
    target: 'https://kvadred.onrender.com',
    changeOrigin: true,
    pathRewrite: { '^/v1': '' }, // Remove /v1 prefix when forwarding
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

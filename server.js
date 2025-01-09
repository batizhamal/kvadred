const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(
  '/v1',
  createProxyMiddleware({
    target: 'https://kvadred.onrender.com',
    changeOrigin: true,
    pathRewrite: { '^/v1': '' },
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

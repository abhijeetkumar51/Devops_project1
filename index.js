const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to DevOps Project API 🚀',
    version: '1.0.0',
    author: 'Abhijeet Kumar',
  });
});

// Health check route (used by Docker/K8s)
app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API info route
app.get('/api/info', (req, res) => {
  res.json({
    app: 'Devops Project',
    environment: process.env.NODE_ENV || 'development',
    node_version: process.version,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
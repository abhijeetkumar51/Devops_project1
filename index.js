const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// API: Health Check
app.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        uptime: process.uptime().toFixed(2) + 's',
        timestamp: new Date().toISOString(),
    });
});

// API: System Info
app.get('/api/info', (req, res) => {
    const pkg = require('./package.json');
    res.json({
        app: pkg.name,
        version: pkg.version,
        author: pkg.author,
        environment: process.env.NODE_ENV || 'development',
        node_version: process.version,
        platform: os.platform(),
        hostname: os.hostname(),
        memory: {
            total: (os.totalmem() / 1024 / 1024).toFixed(0) + ' MB',
            free: (os.freemem() / 1024 / 1024).toFixed(0) + ' MB',
        },
        uptime: process.uptime().toFixed(2) + 's',
        timestamp: new Date().toISOString(),
    });
});
// API: Server Status
app.get('/api/status', (req, res) => {
    res.json({
        server: 'DevOps Pipeline Automation',
        status: 'running',
        checked_by: 'Teacher Demo',
        time: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require("express");
const cors = require('cors');
const app = express();
const emailRoute = require("./emailRoute");

// Enable CORS with preflight support
app.use(cors({
    origin: "https://mca-academy-frontend.vercel.app",
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: false
}));

app.use(express.json());
app.use('/api', emailRoute);

// Handle preflight requests
app.options('*', cors({
    origin: "https://mca-academy-frontend.vercel.app",
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: false
}));

module.exports = app;

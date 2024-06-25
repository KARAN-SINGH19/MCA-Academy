const express = require("express");
const cors = require('cors');
const app = express();
const emailRoute = require("./emailRoute");

// Middleware to explicitly set CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://mca-academy-frontend.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Enable CORS
app.use(cors({
    origin: "https://mca-academy-frontend.vercel.app",
    methods: ["POST", "GET"],
    credentials: false
}));

app.use(express.json());
app.use('/api', emailRoute);

// Handle preflight requests
app.options('*', cors({
    origin: "https://mca-academy-frontend.vercel.app",
    methods: ["POST", "GET"],
    credentials: false
}));

module.exports = app;

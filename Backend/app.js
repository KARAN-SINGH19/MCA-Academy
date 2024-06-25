const express = require('express');
const cors = require('cors');
const app = express();
const emailRoute = require('./emailRoute');

const corsOptions = {
    origin: 'https://mca-academy-frontend.vercel.app',
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false // Set to true if your frontend sends credentials (cookies, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', emailRoute);

module.exports = app;

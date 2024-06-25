const express = require('express');
const cors = require('cors');
const app = express();
const emailRoute = require('./emailRoute');

// Allow requests from specific origin (replace with your frontend URL)
const corsOptions = {
  origin: 'https://mca-academy-frontend.vercel.app',
  methods: ['POST', 'GET', 'OPTIONS'], // Allow the methods you need
  allowedHeaders: ['Content-Type', 'Authorization'], // Add any other headers your app uses
  credentials: false // Set to true if your frontend sends credentials (cookies, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', emailRoute);

module.exports = app;

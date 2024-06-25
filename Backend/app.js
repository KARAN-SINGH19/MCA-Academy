const express = require("express");
const cors = require('cors');
const app = express();
const emailRoute = require("./emailRoute");

// Allow all origins temporarily (for debugging)
app.use(cors());

app.use(express.json());
app.use('/api', emailRoute);

module.exports = app;

const express = require("express");
const cors = require('cors');
const app = express();
const emailRoute = require("./emailRoute")

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use('/api', emailRoute);

module.exports = app;

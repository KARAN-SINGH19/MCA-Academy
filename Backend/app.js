const express = require("express");
const cors = require('cors');
const app = express();
const emailRoute = require("./emailRoute")

app.use(cors(
    {
        methods: ["POST", "GET"],
        credentials: true,
        origin: ["https://mca-academy-frontend.vercel.app"]
    }
));
app.use(express.json());
app.use('/api', emailRoute);

module.exports = app;

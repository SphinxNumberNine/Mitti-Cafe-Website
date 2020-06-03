const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// define routes for app to use

app.listen(PORT);

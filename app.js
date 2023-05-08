const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const snackController = require("./Controllers/snackController.js");
app.use("/snacks", snackController);

app.get("/", (req, res) => {
  res.send("Welcome to our Snack-a-log App!");
})

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
})

module.exports = app;
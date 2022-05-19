require("dotenv").config();
require("colour");

const path = require("path");
const express = require("express");
const Nanit = require("nanit");

const nanitConfig = require("./config/nanit");

const app = express();
const tasks = new Nanit(nanitConfig);

// eslint-disable-next-line
global.__require = (filePath) => require(path.resolve(__dirname, filePath));

// Ping route
app.get("/api/sales-api/ping", (req, res) =>
  res.status(200).send("Ready to receive requests")
);

/**
 * Run initialization tasks.
 */
tasks.initialize(app, (error) => {
  if (error) throw error;
});

/**
 * Run tasks on shutdown.
 */
process.on("SIGINT", () => {
  tasks.finalize((error) => {
    if (error) throw error;

    process.exit();
  });
});

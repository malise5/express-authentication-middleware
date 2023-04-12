const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("dev"));

//ROUTER
app.use("/api/v1/users", userRoutes);

module.exports = app;

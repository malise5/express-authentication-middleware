const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const morgan = require("morgan");
const app = express();

//assign app
app.use(express.json());
app.use(morgan("dev"));

//USERS ROUTER
app.use("/api/v1/users", userRoutes);

module.exports = app;

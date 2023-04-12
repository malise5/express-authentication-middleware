const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const userRoutes = require("./src/routes/userRoutes");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log("====================================");
  console.log(`SERVER RUNNING ON PORT ${port}......`);
  console.log("====================================");
});

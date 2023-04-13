const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const port = process.env.PORT || 8000;

// console.log(process.env);

//CONNECT TO DB
mongoose
    .connect(process.env.CONN_DB, {
        useNewUrlParser: true,
    })
    .then((con) => {
        // console.log(con);
        console.log("=============DataBase=======================");
        console.log("DB onnection successful");
        console.log("====================================");
    })
    .catch((err) => {
        console.log(err.message);
    });

//SERVER
app.listen(port, () => {
    console.log("=============Server=======================");
    console.log(`SERVER RUNNING ON PORT ${port}......`);
    console.log("====================================");
});

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const port = process.env.PORT || 8000;

// console.log(process.env);
//SERVER
app.listen(port, () => {
    console.log("====================================");
    console.log(`SERVER RUNNING ON PORT ${port}......`);
    console.log("====================================");
});

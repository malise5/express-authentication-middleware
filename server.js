const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const port = 6000;

//SERVER
app.listen(port, () => {
    console.log("====================================");
    console.log(`SERVER RUNNING ON PORT ${port}......`);
    console.log("====================================");
});

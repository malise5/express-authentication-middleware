const port = 8000;
const app = require("./app");

//SERVER
app.listen(port, () => {
  console.log("====================================");
  console.log(`SERVER RUNNING ON PORT ${port}......`);
  console.log("====================================");
});

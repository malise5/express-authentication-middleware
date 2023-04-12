const express = require("express");
const router = express.Router();
// const UserRouter = express.Router();
const User = require("./../model/user");

// module.exports = UserRouter.route("/").get(getAllUsers).post(createUsers)
// module.exports = UserRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser)

module.exports = router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Successfully",
      NumberOfUsers: users.length,
      users,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.find(id);
    res.status(200).json({
      message: "Successfully",
      user,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router.post("/", async (req, res) => {
  try {
    const users = await User.res.status(200).json({
      message: "Successfully",
      NumberOfUsers: users.length,
      users,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

const express = require("express");
const router = express.Router();
const getAllUsers = require("./../controllers/userController");
// const UserRouter = express.Router();
// const User = require("./../model/user");

router.route("/").get(getAllUsers);
// .post(createUsers);
// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getAllUsers } = require("./../controllers/userController");

router.route("/").get(getAllUsers);
// .post(createUsers);
// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;

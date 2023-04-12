const express = require("express");
const router = express.Router();
const { getAllUsers } = require("./../controllers/userController");

//params middleware
// router.param("id", (req, res, next, value) => {
//   console.log("user id" + value);
//   next();
// });

router.route("/").get(getAllUsers);
// .post(createUsers);
// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;

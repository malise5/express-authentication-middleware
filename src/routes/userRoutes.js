const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    createUsers,
    getUser,
    updateUser,
    deleteUser,
    validate,
} = require("./../controllers/userController");

router.route("/").get(getAllUsers).post(validate, createUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;

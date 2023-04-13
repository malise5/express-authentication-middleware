const { response } = require("express");
const User = require("./../model/user");

//BODY VALIDATION
exports.validate = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.email) {
            return res.status(404).json({
                status: "Invalid",
                message: "Please enter a name or email address",
            });
        }
    } catch (error) {
        res.json({
            status: "Internal Server Error",
            message: error.message,
        });
    }
    next();
};
//GET ALL THE USERS
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "Success",
            NumberOfUsers: users.length,
            data: { users },
        });

        // res.status(201).send({ message: "get ALl users working" });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

//CREATE A USER
exports.createUsers = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: "Success",
            NumberOfUsers: user.length,
            data: { user },
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

//FIND A USER
exports.getUser = async (req, res) => {
    try {
        id = req.params.id;
        const users = await User.findById(id);
        res.status(200).json({
            status: "Success",
            NumberOfUsers: users.length,
            data: { users },
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

//UPDATE A USER
exports.updateUser = async (req, res) => {
    try {
        id = req.params.id;
        const users = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "Success",
            NumberOfUsers: users.length,
            data: { users },
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

//Delete A USER
exports.deleteUser = async (req, res) => {
    try {
        id = req.params.id;
        const users = await User.findOneAndDelete(id);
        res.status(204).json({
            status: "Deleted Successfully",
            users,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

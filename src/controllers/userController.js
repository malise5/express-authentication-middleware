const User = require("./../model/user");

//GET ALL THE USERS
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "Successfully",
            NumberOfUsers: users.length,
            users,
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
            status: "Successfully",
            NumberOfUsers: user.length,
            user,
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
            status: "Successfully",
            NumberOfUsers: users.length,
            users,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

//UPDATE A USER
exports.updateUser = async (req, res) => {
    try {
        id = req.params.id;
        const users = await User.findByIdAndUpdate(id);
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

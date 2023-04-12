module.exports = getAllUsers = async (req, res) => {
  try {
    // const users = await User.find();
    // res.status(200).json({
    //   message: "Successfully",
    //   NumberOfUsers: users.length,
    //   users,
    // });

    res.status(201).send({ message: "get ALl users working" });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

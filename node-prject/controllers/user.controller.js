const mongoose = require("mongoose");
const User = require("../models/user.model");

getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

createUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No user with that id");

  const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });

  res.json(updatedUser);
};

deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No user with that id");

  await User.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully" });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

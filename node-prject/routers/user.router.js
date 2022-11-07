const router = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
// const User = require('../models/user.model');

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

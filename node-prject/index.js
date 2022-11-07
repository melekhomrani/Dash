const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyparser = require("body-parser");

require("dotenv").config();
require("./DB/DBconfig");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "views/static")));

app.get("/", (req, res) => res.render("index"));
app.use("/user", require("./routers/user.router"));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

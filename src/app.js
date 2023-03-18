const express = require("express");
const path = require("path");

const checkListRouter = require("./routes/checklist");
const rootRouter = require("./routes/index");
require("../config/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);

module.exports = app;

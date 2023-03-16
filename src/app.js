const express = require("express");
const checkListRouter = require("./routes/checklist");
require("../config/database")

const app = express();

app.use(express.json());
app.use("/checklists", checkListRouter);

module.exports = app;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Api running" });
});

app.listen(5000, () => console.log("Running at 3000"));

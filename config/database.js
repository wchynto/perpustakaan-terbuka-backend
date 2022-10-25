const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("connected", () => {
  console.log("connected to database");
});

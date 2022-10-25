const express = require("express");
require("dotenv").config();

const app = express();

require("./config/database");

app.listen(process.env.PORT, () => {
  console.log(`app runing on port ${process.env.PORT}`);
});

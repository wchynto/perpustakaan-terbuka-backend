const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./config/database");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("short"));
app.use(cors());
app.use(express.static(__dirname));

//import route
const booksRoute = require("./routes/books_route");
const usersRoute = require("./routes/users_route");

app.use("/", booksRoute);
app.use("/users", usersRoute);

app.listen(process.env.PORT, () => {
  console.log(`app runing on port ${process.env.PORT}`);
});

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
connectDB();
routes(app);
app.listen(PORT, () => {});

const express = require("express");
const connection = require("./Config/db");
const dotenv = require("dotenv");
const router = require("./Controller/router");
const cors = require("cors");
const app = express();

dotenv.config();
connection();

app.use(express.json());
app.use(cors());

app.use("/record", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

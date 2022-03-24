const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

app.listen(3000, () => console.log("Server connected to Port : 3000"));

const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const grading = require("./routes/api/grading");

const PORT = 4000; 
const app = express(); //constructor of express

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(helmet());

connectDB();
// define base url. v1 stands for version 1
app.use("/v1/grading", grading);
// start and launch server
app.listen(PORT, console.log(`API is listening on port ${PORT}`));

// base url will be like http://localhost:4000/v1/grading
const express = require("express");
const app = express();
require("dotenv").config();
const UserRouter = require("./routes/user.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// for app requirement
app.use(express.json());
app.use(cookieParser());

// Updated CORS configuration to allow credentials
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Allow cookies to be sent
}));

// for Importing Database
require("./db/connection");

// for Importing Routers
app.use("/api/v1", UserRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
});

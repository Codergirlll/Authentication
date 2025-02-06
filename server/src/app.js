

const express = require("express")
const app = express()
require("dotenv").config()
const UserRouter = require("./routes/user.route")
const cors = require("cors")

app.use(cors())

// for Importing Database
require("./db/connection")


// for app requirement
app.use(express.json())

// for Importing Routers
app.use("/api/v1", UserRouter)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`)
})
const express = require("express")
const app = express()

app.use(express.json())

// Route Imports
const productRoute = require("./routes/productRoute")

app.use("/api/v1",productRoute)

module.exports = app
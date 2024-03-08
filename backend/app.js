const express = require("express")
const productRoute = require("./routes/productRoute")
const errorMiddleware = require("./middlewares/error")

const app = express()
app.use(express.json())

// Route Imports
app.use("/api/v1",productRoute)

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app
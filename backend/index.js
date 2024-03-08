const app = require("./app")
const dotenv = require("dotenv")
const connectDB = require("./db")

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})

// Config
dotenv.config({
    path: "backend/config/.env"
})

// Connecting to Database
connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("MongoDB connection issues :", err)
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server started at http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection error : ${err}`)
    })

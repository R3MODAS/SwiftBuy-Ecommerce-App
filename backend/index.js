const app = require("./app")
const dotenv = require("dotenv")
const connectDB = require("./db")

// Config
dotenv.config({
    path: "backend/config/.env"
})

// Connecting to Database
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}`)
})
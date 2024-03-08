const mongoose = require("mongoose")
const DB_NAME = require("../constants")

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected with server : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log('Error:',err.message)
        process.exit(1)
    }
}

module.exports = connectDB

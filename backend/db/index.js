const mongoose = require("mongoose")
const DB_NAME = require("../constants")

const connectDB = () => {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`)
    })
    .catch((err) => {
        console.log(err)
        throw new Error(err)
    })
}

module.exports = connectDB

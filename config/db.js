const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongoDB ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Not Connected from Mongodb Error: ${error}`.bgRed.white);
    }
}

module.exports = connectDB
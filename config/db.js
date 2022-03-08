// require mongoose for model implementation
const mongoose = require('mongoose');
// connect DB - throw err when fails
const connectDB  = () => {
    try {
        mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB - CONNECTED')
    } catch (err) {
        console.log('error occurred while try to connect to db:', err)
        throw err;
    }
};

module.exports = connectDB;
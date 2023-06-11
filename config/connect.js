const mongoose = require("mongoose");
const connect = async () => {
    console.log('connecting to db');
    await mongoose.connect('mongodb+srv://kalsariyabhargav187:exam-ls@cluster0.h2orsdh.mongodb.net/?retryWrites=true&w=majority')
    console.log('connected to db');
}
// connect();
module.exports = connect;
const mongoose = require("mongoose");
const URI = "mongodb+srv://kaitlynchao1:bunnyduck7@cluster1.hsmud2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";


const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("database successfully connected")
}

module.exports = connectDB;
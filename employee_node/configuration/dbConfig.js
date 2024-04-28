const mongoose = require("mongoose");

// const connectedToMongoDB = async () => {    
//     try {
//         await mongoose.connect("mongodb://localhost:27017/employee_db");
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.log(`MongoDB connection error: ${error}`);
//     }
// }

// module.exports = { mongoose, connectedToMongoDB};

mongoose.connect("mongodb://localhost:27017/employee_db", {
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
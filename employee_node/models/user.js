const mongoose = require("../configuration/dbConfig");
 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    gender: String,
    salary: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
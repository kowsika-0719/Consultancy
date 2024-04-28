const User = require("../models/user");

class UserService {
    async createUser(name, email, phone, gender, salary) {
        const newUser = new User({name, email, phone, gender, salary});
        return await newUser.save();
    }
    
    async getAllUsers(){
        return await User.find();
    }

    async getUserById(userId){
        return User.findById(userId);
    }

    async updateUser(userId, updatedData){
        return await User.findByIdAndUpdate(userId, updatedData,{
            new: true
        })
    }

    async deleteUser(userId){
        return await User.findByIdAndDelete(userId);
    }

};

module.exports = new UserService();
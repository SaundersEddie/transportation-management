const User = require('../models/user.js');
// import bcrypt from 'bcrypt';

module.exports = {
  getUsers: async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
  },
  addUser: async (req, res) => {
    console.log ("Creating new user");
    const addUserBody = req.body;
    const newUser = new User(addUserBody);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
  }
}
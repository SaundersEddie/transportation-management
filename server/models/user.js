// Our user models
const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

// Define userSchema
const userSchema = mongoose.Schema({
  firstName: { 
    type: String, 
    unique: false,
    required: true
  },
  lastName: { 
    type: String, 
    unique: false,
    required: true
  },
  userName: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    unique: false, 
    required: true 
  },
  userEmail: { 
    type: String, 
    unique: true, 
    required: true 
  }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User;

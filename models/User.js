const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  profilePicture: {
    type: String,
  },

},
{timestamps:true}
);



module.exports=mongoose.model("User",userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username: String,
  password: String,
  name: String,
  email: String,
  imgAvatar: {
    type: String,
    default:"https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250"
  },
  city: String,
  birthyear: Date,
  description: String,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

const User = mongoose.model('User', userSchema);
module.exports = User;

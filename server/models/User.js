const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

 username: String,
  password: String,
  name: String,
  lastname: String,
  email: String,
  avatarImage: {
    type: String,
    default: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250"
  },
  city: String,
  birthdate: Date,
  description: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  content: {type: String, required: true},
  comment_food: [{type: mongoose.Schema.Types.ObjectId, ref: 'Food'}],
  comment_user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  datepost: {type:Date},
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({

 creatorId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  foodId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }]
});

const Favorites = mongoose.model('Favorites', favoritesSchema);
module.exports = Favorites;

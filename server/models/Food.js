const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({

  foodName: {type: String, required: true},
  foodCategory: {
    type: String,
    required: true,
    enum: ['Cocina Española', 'Cocina Boliviana', 'Cocina Italiana', 'Cocina Americana', 'Cocina Japonesa'],
  },
  foodSubCategory: {type: String, required: true },
  foodCreator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  price: {type:Number},
  rate: {type:Number},
  imgAvatar: {
    type: String,
    default: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250"
  },
  restaurantName: {type:String},
  restaurantAddress: {type:String},
  restaurantFoodName: {type:String},
  review: {type:String},
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Food', FoodSchema);

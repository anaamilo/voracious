const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({

  foodName: {type: String},
  foodCategory: {
    type: String,
    enum: ['italiana', 'española','mexicana', 'boliviana', 'fast-food', 'japonesa']
  },
  foodSubCategory: {type: String,},
  foodCreator: {type: Schema.Types.ObjectId, ref: 'User'},
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

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;

const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
  foodName: {type: String, required: true},
  foodCategory: {
    type: String,
    required: true,
    enum: ['Cocina Española', 'Cocina Boliviana', 'Cocina Italiana', 'Cocina Americana', 'Cocina Japonesa'],
  },
  foodSubCategory: {type: String, required: true },
  foodeCreator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  price: {type:Number},
  rate: {type:Number},
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

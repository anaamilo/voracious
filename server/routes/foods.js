var express = require('express');
var router = express.Router();
const Food = require('../models/Food');
const upload = require('../config/multer');


router.get('/', (req, res, next) => {
  Food.find((err, foodsList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(foodsList);
  });
});

router.post('/', upload.single('file'), (req, res, next) => {
  console.log(hola);
  const theFood = new Food({
    foodName: req.body.foodName,
    foodCategory: req.body.foodCategory,
    foodSubCategory: req.body.SubCategory,
    // foodCreator: req.user._id,
    price: req.body.price,
    rate: req.body.rate,
    restaurantName: req.body.restaurantName,
    restaurantAddress: req.body.restaurantAddress,
    restaurantFoodName: req.body.restaurantFoodName,
    review: req.body.review,
    imgAvatar: `/uploads/${req.file.filename}`
    //req.body.image || ''
  });
  console.log('POST');
  console.log(theFood);
  theFood.save().then( food => {
    res.json({
      message: 'New Food created!',
      id: theFood._id
    });
  }).catch( error => res.json(error));
});

router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Food.findById(req.params.id, (err, theFood) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theFood);
    });
});
router.put('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
    foodName: req.body.foodName,
    foodCategory: req.body.foodCategory,
    foodSubCategory: req.body.SubCategory,
    foodCreator: req.user._id,
    price: req.body.price,
    rate: req.body.rate,
    restaurantName: req.body.restaurantName,
    restaurantAddress: req.body.restaurantAddress,
    restaurantFoodName: req.body.restaurantFoodName,
    review: req.body.review,
    imgAvatar: req.body.image
  };

  Food.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'Updated successfully'
    });
  });
});
router.delete('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Food.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: 'The food has been removed!'
    });
  });
});


module.exports = router;

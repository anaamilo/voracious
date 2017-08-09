var express = require('express');
var router = express.Router();
const Food = require('../models/Food');
const User       = require('../models/User');
const upload = require('../config/multer');
const mongoose = require ('mongoose');



router.get('/', (req, res, next) => {
  Food.find((err, foodsList) => {
    if (err) {
      res.json(err);
      return;
    }

    foodListPromises = foodsList.map( f => {
      return new Promise((resolve, reject) => {
        f.populate('foodCreator', (err, foodItem) => {
          resolve(foodItem);
        });
      });
    });
    Promise.all(foodListPromises).then(foodList => {
      console.log(foodList);
      res.json(foodList);
    })
  });
});

router.get('/search', (req, res, next) => {
  Food.find({}, {foodName:1, foodSubCategory:1, _id:0}, (err, foodsList) => {
    if (err) {
      res.json(err);
      return;
    }
    console.log(foodsList);
    res.json(foodsList);
  });
});

router.post('/', upload.single('file'), (req, res, next) => {
  console.log(req.file.filename);
  console.log(req.user);
  const theFood = new Food({
    foodName: req.body.foodName,
    foodCategory: req.body.foodCategory,
    foodSubCategory: req.body.foodSubCategory,
    price: req.body.price,
    rate: req.body.rate,
    restaurantName: req.body.restaurantName,
    restaurantAddress: req.body.restaurantAddress,
    restaurantFoodName: req.body.restaurantFoodName,
    foodCreator: req.user._id,
    review: req.body.review,
    imgAvatar: `/uploads/${req.file.filename}`
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



router.get('/category/:foodCategory', (req, res) => {
  const foodCategory = req.params;
  console.log("BACK", foodCategory);
  Food.find( foodCategory ).then( food => {
    res.json(food);
  }).catch( e => {
    res.json(e);
  });
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

      theFood.populate('foodCreator', (err, foodOne) => {
          console.log(foodOne);
          res.json(foodOne);
        });
      });
  });


router.put('/:id', (req, res) => {

  const updates = {
    foodName: req.body.foodName,
    foodCategory: req.body.foodCategory,
    foodSubCategory: req.body.foodSubCategory,
    price: req.body.price,
    rate: req.body.rate,
    restaurantName: req.body.restaurantName,
    restaurantAddress: req.body.restaurantAddress,
    restaurantFoodName: req.body.restaurantFoodName,
    review: req.body.review,
    imgAvatar: `/uploads/${req.file.filename}`
  };
  console.log(updates);

  Food.findByIdAndUpdate(req.params.id, updates).then(food => {
      res.json(food);
    })
    .catch(e => res.json(e));
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
      message: 'This food has been removed!'
    });
  });
});


module.exports = router;

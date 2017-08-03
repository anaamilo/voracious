const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const User       = require('../models/User');
const authRoutes = express.Router();


function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}

authRoutes.get('/signup',returnMessage("This should be a POST"));

//Sign-up POST route
authRoutes.post('/signup', (req, res, next) => {
  
  const {
    username,
    password,
    name,
    lastname,
    email,
    avatarImage,
    city,
    birthdate,
    description
  } = req.body;

  if(!username || !password) {
    res.status(400).json({
      message:'Please provide matching username and/or password'
    });
    return;
  }

  User.findOne({username}, '_id').exec().then(foundUser => {
    if (foundUser) {
      res.status(400).json({
        message:"Username already exists"
      });
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);

  const theUser = new User({
    username,
    password: hashPass,
    name,
    lastname,
    email,
    avatarImage,
    city,
    birthdate,
    description
  }).save().then(user => {
    req.login(user, (err) => {
    if (err) {
      res.status(500).json({
        message: 'Oops..something went wrong'
      });
      return;
    }
    res.status(200).json(req.user);
  });
}).catch(e => res.status(400).json({
  message: "Something went wrong"
  }));
  });
});

//Login routes
authRoutes.get('/login', returnMessage("This should be a Post"));

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({message:"Oops...something went wrong"});
      return;
    }

    if(!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({message:"Something went wrong"});
      return;
    }
    res.status(200).json(req.user);
  });
})(req, res, next);

});

//Returns Json error for authenticated user
function ensureLoginOrJsonError(error ="Unauthorized") {
  return (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({
    error: error
  });
}

//Logout routes
authRoutes.get('/logout', ensureLoginOrJsonError("User is not logged in"), (req,res,next) => {
  req.logout();
  console.log("hola");
  res.status(200).json({
    message:"Successfull logout"
  });
});

authRoutes.get('/loggedin', ensureLoginOrJsonError(), (req, res, next) => {
  return res.status(200).json(req.user);
});

//Secret route
authRoutes.get('/private', ensureLoginOrJsonError(), (req, res, next) => {
  return res.json({
    message: 'This is a secret zone'
  });
});



module.exports = authRoutes;

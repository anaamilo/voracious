require('dotenv').config();
const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const urlDB = process.env.MONGO_URL;


console.log(`connecting to db: ${urlDB}`);
mongoose.connect(urlDB).then(() => {
  console.log(`connected!! to db: ${urlDB}`);
});

const app = express();

require('./config/cors')(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.title = 'Express - Generated with IronGenerator';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use(session({
  secret: 'angular secret session',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 5000000 }
}));

require('./passport/local')(passport);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const foodRoutes = require('./routes/foods');
app.use('/api/foods', foodRoutes);

app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

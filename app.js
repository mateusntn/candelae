var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
var ordersRouter = require('./routes/ordersRouter');
var formPaymentsRouter = require('./routes/formPaymentsRouter');
var adressesRouter = require('./routes/adressesRouter');
var sizesRouter = require('./routes/sizesRouter');
var scentsRouter = require('./routes/scentsRouter');
var modelsRouter = require('./routes/modelsRouter');
var productsRouter = require('./routes/productsRouter');
var imgsRouter = require('./routes/imgsRouter');
var order_itemsRouter = require('./routes/order_itemsRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: "candelae",
    saveUninitialized: true,
    resave: true
  }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/formPayments', formPaymentsRouter);
app.use('/adress', adressesRouter);
app.use('/sizes', sizesRouter);
app.use('/scents', scentsRouter);
app.use('/models', modelsRouter);
app.use('/products', productsRouter);
app.use('/imgs', imgsRouter);
app.use('/order_items', order_itemsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

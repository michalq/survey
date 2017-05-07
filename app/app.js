const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Get routes
const index = require('./routes/index');
const apiv1 = require('./routes/apiv1');

// Initialize an app
const app = express();

global.config = require('./Config.js');
global.__base = __dirname;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Set routes
app.use('/', index);
app.use('/api/v1', apiv1);

// Catch 404 and forward to error handler.
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.json({
    success: false,
    status: err.status || 500,
    error: {
      message: "We have some troubles, but we are working hard to make it work!"
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

module.exports = app;
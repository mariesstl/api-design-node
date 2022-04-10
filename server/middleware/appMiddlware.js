var morgan = require('morgan');
var bodyParser = require('body-parser');
// setup global middleware here

//takes in an app and sets up global middleware on it.  Returns nothing.
module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

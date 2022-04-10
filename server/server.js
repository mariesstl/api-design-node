var express = require('express');
var app = express();
var api = require('./api/api');
var err = require ('./middleware/err');

// console.log(api)
// setup the app middleware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('./api', api);



// set up global error handling in other file
app.use(err());


// export the app for testing
module.exports = app;


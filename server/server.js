var express = require('express');
var app = express();
var api = require('./api/api'); //this is a just a router called api

// setup the app middlware when provided an app.
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);
// set up global error handling

// export the app for testing
module.exports = app;

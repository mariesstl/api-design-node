// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

// on GET request to the url
app.get('/', function(req, res) {
    //res.sendFile takes an absolute path to a file and 
    //sets the mime type based on the file .ext name.
    res.sendFile(__dirname + '/index.html', function(err) {
        if (err){
            res.status(500).send(err); //would not do this on an index.html page
        }
    })
});

app.get('/data', function(req, res) {
    res.json(jsonData);
});

var port = 3000;
app.listen(port, function(){
    console.log('listening on http://localhost:', port);
});

// // on POST request to the same url
// app.post('/', function(req, res) {

// });

// start server on port 3000
// app.listen(3000);
       



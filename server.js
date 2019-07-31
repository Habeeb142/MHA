const express = require('express');
const path = require('path');
const server = express();

// Serve static files....
server.use(express.static(__dirname + '/dist/weather-app'));

// Send all requests to index.html
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/weather-app/index.html'));
});

// default Heroku PORT
server.listen(process.env.PORT || 4200);

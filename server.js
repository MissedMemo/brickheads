var express = require('express');
var app = express();

var port = process.env.PORT || 4568;

// Serve index.html file (detected automatically in specified directory)
app.use( express.static( __dirname + '/public') );


app.listen( port, function () {
  console.log( 'server listening on port ' + port + '...\n' );
});
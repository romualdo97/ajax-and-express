var express = require('express');

// routes
var routes = require('./routes/routes');

//api
var api = require('./routes/api/friends');

var app = express();

app.use(express.static( __dirname + '/public' ));

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// routes
app.get('/', function(req, res){
	routes.index(req, res);
});

// api
app.get('/api/friends', function(req, res){
	api.friends(req, res);
});

app.use(function(req, res, next){
	res.status( 404 );
	res.send('Error 404 - Not found');
});
// app.use(function(err, req, res, next){
// 	res.status( 500 );
// 	res.send('Error 500 - Internal server error');
// });

app.listen(app.get('port'), function(){
	console.log('Server running from ' + app.get('port'));
});
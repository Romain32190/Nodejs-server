var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('Hello world!');
});

app.listen(3300, function(){
	console.log('App listening on port 3300');

});

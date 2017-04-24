var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var user={
	username : "Pierre",
	mdp : "paul-jacques"
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


app.listen(3300, function(){
	console.log('App listening on port 3300');

});

app.post('/login', function(req, res) {
	
	
		if( user.username === req.body.username && user.mdp === req.body.mdp){
			res.send({redirect: 'account.html'});

		}else{
			res.send("Problème d'identification!");
			console.log(res);
		}

	
});
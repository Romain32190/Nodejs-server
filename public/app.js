$('#button').click(function(){

$.ajax({
	url: "/login",
	type : "POST",
	data: {
		username : $('#username').val(),
		mdp : $('#mdp').val(),
	}

}).done(function (res) {
	if (typeof res.redirect == 'string'){
		window.location = res.redirect;
		alert("Vous êtes identifié!");
	}else{
    	alert("Vous n'êtes pas identifié!");
	}
});

});

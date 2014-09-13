(function(){
	var index = function(req, res){
		res.render('index', {title: 'hola mundo'});
	};

	this.routes = {
		index: index
	};
})();

exports.index = routes.index;
var nombres = [
	'romualdo',
	'jose',
	'pedro',
	'andrea',
	'alejandra',
	'ana',
	'mike',
	'vicky',
	'luis'
];
(function(){

	var friends = function(req, res){
		var q = (req.query.q);
		if ( !q ) {
			res.type('application/json');
			res.send({results: 'Not query typed. :('});
			return;
		}
		var r = searchFriends( req, res, q );
		res.type('application/json');
		res.send( r );
	};

	var searchFriends = function( req, res, pattern ){
		var results = {};
		var r;
		var patt = new RegExp( '^' + pattern );
		for( var i = 0; i < nombres.length; i++ ){
			if ( patt.test( nombres[i] ) ){
				r += nombres[i] + ',';
			}
		}
		// console.log( r );
		if( !r ){
			return results = ['Ther\'re no matches'];
		}
		r = r.replace(/undefined/, '');
		// console.log( 'removed undefined string ');
		// console.log( r );		

		r = r.split(',');		
		// console.log( 'splited by comma' );
		// console.log(r);

		r.splice( r.length - 1, 1 );
		// console.log('removed empty array property');
		// console.log( r );
		
		results = r;
		return results;
	};

	this.api = {
		friends: friends
	};
})();

exports.friends = api.friends;
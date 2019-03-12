module.exports = function(app) {  
    // app.route('/user')
    //     .get(function (req, res) {
    //         res.send('Hello World!');
    //     })
    //     .post(function (req, res) {
    //         res.send('Got a POST request');
    //     })
    //     .put(function (req, res) {
    //         res.send('Got a PUT request at /user');
    //     })
    //     .delete(function (req, res) {
    //         res.send('Got a DELETE request at /user');
    //     });
    const nano = require('nano')('http://admin:bnet2019@79@45.118.145.34:5984');

	app.get('/api/hello', (req, res) => {
	
	  res.send({ express: 'response' });
	});
	app.get('/api/themeclient', (req, res) => {
	nano.db.replication.enable('alice', 'http://admin:password@otherhost.com:5984/alice',
	                   { create_target:true }).then((body) => {
	  return nano.db.replication.query(body.happy);
	}).then((response) => {
	  console.log(response);

		  res.send({ express: response });
		});
	  
	});
	// route config theme
	app.post('/api/themeclient', (req, res) => {
		
	  res.send({ express: 'response' });
	});
	app.put('/api/themeclient', (req, res) => {
		
	  res.send({ express: 'response' });
	});
	app.delete('/api/themeclient', (req, res) => {
		
	  res.send({ express: 'response' });
	});
	// route for user
	app.get('/api/user', (req, res) => {
		const alice = nano.use('alice')
		
		alice.get('rabbit').then((body) => {
	  console.log(body);
	});
		app.get('/api/user/:id', function(req, res) {  
	    var id = req.params['id']; 
	    res.send('The id is ' + id); 
	});
	  res.send({ express: 'response' });
	});
	app.post('/api/user', (req, res) => {
		
	  res.send({ express: 'response' });
	});
	app.put('/api/user', (req, res) => {
		
	  res.send({ express: 'response' });
	});
	app.delete('/api/user', (req, res) => {
		
	  res.send({ express: 'response' });
	});
}
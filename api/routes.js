'use strict';
module.exports = function(app) {
  let userconfig = require('./controller/UserController');

  // todoList Routes
app.route('/api/users')
	.get(userconfig.get)
	.post(userconfig.store);

app.route('/api/users/:userId')
	.get(userconfig.detail)
	.put(userconfig.update)
	.delete(userconfig.delete);
// route theme client
app.route('/api/theme')
	.get(userconfig.getTheme)
	.post(userconfig.storeTheme);
app.route('/api/theme/:themeid')
	.get(userconfig.detailTheme)
	.put(userconfig.updateTheme)
	.delete(userconfig.deleteTheme);
	// route app client
app.route('/api/appvote')
	.get(userconfig.getAppvote)
	.post(userconfig.storeAppvote);
app.route('/api/appvote/:appvoteid')
	.get(userconfig.detailAppvote)
	.put(userconfig.updateAppvote)
	.delete(userconfig.deleteAppvote);
	
};
var jsonServer = require('json-server');
var cookieParser = require('cookie-parser');
var server = jsonServer.create();
// var router = jsonServer.router('db.js');
var middlewares = jsonServer.defaults();

// var isAuthorized = function (req) {
// 	var cookies = req.cookies;
// 	if (cookies && cookies.jamesAdmin_login_test) {
// 		return true;
// 	}
// 	else {
// 		return false
// 	}
// };


server.use(middlewares);
server.use(cookieParser());
// server.use(router);
server.listen(3000, function () {
	console.log('JSON Server is running')
});

var express = require('express');
var passport = require("passport");
var passportLocal = require("passport-local");
var router = express.Router();
var encrypt = require('../secure/encrypt');
var db = require('../database/db');
var https = require('https');

router.get('/', function(req, res, next) {
	res.render('index', {
		isAuthenticated: req.isAuthenticated(),
		user: req.user
	});
});

//https://twitter.com/intent/tweet?url=http%3A%2F%2Flive.amcharts.com%2FmM222OD%2F&text=Build+your+own+free+chart+like+this+and+share+on+Twitter+or+add+as+interactive+widget+to+your+website.
router.get('/login/:id', function(req, res, next) {
	/* Entered login or password is incorrect */
	console.log("Here" + req.params.id);
	db.checkСorrectness(req.params.id, function(err, user) {
    if (user) {
   		var data = {
   			'id': user.id,
   			'name': user.name,
   		}
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({}));
    }
  });
	
});
/* POST user data. */
router.post('/login', function(req, res, next) {
	/* Passport function */
	passport.authenticate('local', function(err, user, info) {
		/* Error */
		if (err) {
			return next(err);
		}
		/* Incorrect login or password */
		if (!user) {
			var string = encodeURIComponent('something that would break');
			return res.redirect('/login?valid=' + string);
		}
		/* Correct login and password */
		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}
			return res.redirect('/');
		});
	})(req, res, next);
});
/* Logout and redirect to home page */
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});
/* Registration */
router.get('/registration', function(req, res) {
	res.redirect('/');
});
/* Registrate new user */
router.post('/registration', function(req, res) {
	var user = {
		id: req.body.email,
		name: req.body.name,
		provider: "local",
		passport: encrypt.encrypt(req.body.password),
		charts: []
	};
	db.insertUser(user);
	res.redirect('/');
});
router.get('/editor', function(req, res) {
	res.render('editor');
});

router.get('/editor/:id', function(req, res) {
	res.render('editor');
});

router.get('/facebook',
	passport.authenticate('facebook'),
	function(req, res) {
		// The request will be redirected to Facebook for authentication, so this
		// function will not be called.
	});

router.get('/facebook/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/login'
	}),
	function(req, res) {
		res.redirect('/');
	});

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback',
	passport.authenticate('twitter', {
		failureRedirect: '/login'
	}),
	function(req, res) {
		res.redirect('/');
	});

router.get('/user', function(req, res) {
	var user = req.user || {};
	console.log("Current user:" + user);
 	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(user));
});

router.post('/save', function(req, res) {

	if (req.isAuthenticated()) {
		var user = req.user;
		var chart = req.body;
		console.log("chart data" + chart);
		var elem = {
			url: chart.url,
			owner: user.id,
			name: chart.name,
			description: chart.description,
			data: chart.data
		}
		db.savePublicChart(elem);
	} else {
		console.log("Please login");
	}
	res.send(req.body);
});

router.post('/populate', function(req, res) {
		var chartData = req.body;
		console.log("Populate: /chart data:" + chartData.name + chartData.owner);
		db.populate(chartData);
		res.send(req.body);
});



// router.get('/data', function(req, res) {
// 	var user = req.user;
// 	console.log('/////////////////////////////////');
// 	console.log(user);
// 	if(user) {
// 	db.getUserCharts(user.id, function(err, result) {
// 		console.log("REs" + result);
// 		res.send(result);
// 	});
// } 
// else {
// 	res.send("Please Log in");
// }
// });

router.get('/data/:id', function(req, res) {
	console.log("HERE ID"+req.params.id);
	db.getUserCharts(req.params.id, function(err, result) {
		console.log("REs" + result);
		var neededData =[];
		for(var i = 0; i < result.length; ++i) {
	    neededData.push({
			'id': result[i].id,
			'name': result[i].name,
			'description': result[i].description,
			'imageSrc': 'http://a.deviantart.net/avatars/e/i/eigthdeadlysin.jpg?5' 
		});
		}
		res.send(neededData);
	});
});

router.post('/share', function(req, res) {
	if (req.isAuthenticated()) {
		var chart = req.body;
		db.savePublicChart(chart);
	} else {
		console.log("Please login");
	}
	res.send(chart);
});

router.delete('/charts/:id', function(req, res) {
	req.on("data", function(data) {
		console.log('delete me')
	});
	console.log(req.params.id);
	db.deleteChart(req.params.id);
	res.end("JSON accepted by server");
});
router.get('/charts/:id', function(req, res) {
	db.getChartByUrl(req.params.id, function(err, chartData) {
		res.send(chartData);
	});
});

router.get('/public/:id', function(req, res) {
	console.log("here");
	db.getChartByUrl(req.params.id, function(err, chartData) {
		res.send(chartData);
	});
	console.log("here");
});

router.get('/:id', function(req, res) {
	var url = req.params.id;
	db.getChartByUrl(url, function(err, result) {
		res.render('view', {
			data: JSON.stringify(result.data)
		});
	});

});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

module.exports = router;
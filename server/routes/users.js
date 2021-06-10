const express = require('express');
const router = express.Router();

const User = require('../model/user');


router.post('/login', (req, res) => {
	mongoose.connect(url,{ useMongoClient: true }, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
            
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
			
		})
	});
})

router.post('/create', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		const user = new User({
			name: req.body.name,
			username: req.body.username,
			password: req.body.password
		})
		user.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})

module.exports = router;

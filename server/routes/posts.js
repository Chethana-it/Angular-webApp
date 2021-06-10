const express = require('express');
const router = express.Router();

const Post = require('../model/post');

router.post('/api/post/createPost', (req, res) => {
    res.send('ekath weda yko');
	mongoose.connect(url, { useMongoClient: true }, function(err){
		if(err) throw err;
		const post = new Post({
			title: req.body.title,
			description: req.body.description
		})
		post.save((err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})


router.post('/api/post/getPost', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		const post = new Post({
			title: req.body.title,
			description: req.body.description
			
		});console.log(title);
		post.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})

router.post('/api/post/getAllPost', (req, res) => {
	mongoose.connect(url, { useMongoClient: true } , function(err){
		if(err) throw err;
		Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: doc
			})
		})
	});
})

module.exports = router;
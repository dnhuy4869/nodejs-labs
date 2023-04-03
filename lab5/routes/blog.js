const express = require('express');
const blogController = require('../controllers/blog');
const router = express.Router();

router.get('/posts', blogController.getPosts);

router.get('/post/:postId', blogController.getPostById);

router.post('/post', blogController.createPost);

router.put('/post/:postId', blogController.updatePostById);

router.delete('/post/:postId', blogController.deletePostById);

module.exports = router;
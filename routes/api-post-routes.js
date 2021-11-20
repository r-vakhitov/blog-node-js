const express = require('express');
const { getPost, deletePost, editPost, getAllPosts, addPost } = require("../controllers/api-post-controller");

const router = express.Router();

// Get all posts
router.get('/api/posts', getAllPosts);
// Add new post
router.post('/api/add-post', addPost);
// Get post by id
router.get('/api/post/:id', getPost);
// Delete post by id
router.delete('/api/post/:id', deletePost);
// Update post by id
router.put('/api/post/:id', editPost);

module.exports = router;
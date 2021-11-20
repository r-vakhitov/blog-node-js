const express = require('express');
const { getPost, deletePost, getEditPost, editPost, getAllPosts, addPost, getAddPost} = require("../controllers/post-controller");

const router = express.Router();

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.get('/posts', getAllPosts);
router.post('/add-post', addPost);
router.get('/add-post', getAddPost);

module.exports = router;
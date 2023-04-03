const { createPost, editPost, deletePost } = require("../controller/post");

const router = require("express").Router();

router.post("/create-post", createPost);

router.put("/edit-post/:id", editPost);

router.delete("/delete-post/:id", deletePost);

module.exports = router;
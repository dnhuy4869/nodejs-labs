const Post = require("../models/post");

const getPosts = (req, res) => {
    Post.findAll().then(posts => {
        return res.status(200).json({
            message: "Fetched successfully",
            posts: posts
        })
    })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }

            next(err);
        })
}

const getPostById = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId).then(post => {
        if (!post) {
            const error = new Error("Not found post");
            error.statusCode = 404;
            throw error;
        }

        return res.status(200).json({
            message: "Found post",
            post: post
        })
    })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }

            next(err);
        })
}

const createPost = async (req, res, next) => {

    const post = await Post.create(req.body);

    return res.status(200).json({
        message: 'Post created successfully!',
        post: post,
    });
}

const updatePostById = async (req, res, next) => {
    const postId = req.params.postId;
    await Post.update(req.body,
        {
            where: { postId: postId },
        })

    return res.status(200).json({
        message: 'Post updated successfully!'
    });
}

const deletePostById = async (req, res, next) => {
    const postId = req.params.postId;
    await Post.destroy({
        where: { postId: postId },
    })

    return res.status(200).json({
        message: 'Post deleted successfully!'
    });
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePostById,
    deletePostById
}
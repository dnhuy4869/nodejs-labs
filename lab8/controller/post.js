const Post = require("../models/post")

const createPost = async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post(title, content, new Date().toISOString());

    post.save().then(result => {
        return res.status(200).json({
            message: "Thêm thành công",
            post: result
        })
    })
    .catch(err => {
        next(err);
    })
}

const editPost = async (req, res, next) => {
    const id = req.params.id;
    //console.log(id);

    const title = req.body.title;
    const content = req.body.content;
    const post = new Post(title, content, new Date().toISOString());

    const editPost = await post.findById(id);
    
    if (!editPost) {
        return res.status(404).json({
            message: "Can't find post"
        })
    }

    await post.editOne(id, {
        title: title,
        content: content,
        create_date: new Date().toISOString()
    });

    return res.status(200).json({
        message: "Updated successfully"
    })
}

const deletePost = async (req, res, next) => {
    const id = req.params.id;
    //console.log(id);

    const post = new Post("", "", new Date().toISOString());

    const editPost = await post.findById(id);
    
    if (!editPost) {
        return res.status(404).json({
            message: "Can't find post"
        })
    }

    await post.deleteOne(id);

    return res.status(200).json({
        message: "Deleted successfully"
    })
}

module.exports = {
    createPost,
    editPost,
    deletePost
}
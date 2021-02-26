const Blog = require('../models/Blog');

module.exports =
{
    getBlog: (req, res, next) => {
        Blog.findById(req.params.id)
            .populate('author')
            .populate('comments.user')
            .then(blog => {
                if (!blog) {
                    res.status(404).send()
                } else {
                    res.send(blog)
                }
                next()
            })
            .catch(err => res.status(400).send(err));
    },

    postBlog: (req, res, next) => {

    },

    clapBlog: () => {

    },

    commentBlog: () => {

    },

    
}
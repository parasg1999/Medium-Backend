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
        const { title, description, content, image, tags } = req.body;
        const author = req.user._id;

        const newBlog = new Blog({
            title,
            description,
            content,
            image,
            author,
            tags,
        });

        newBlog.save()
            .then(blog => res.send(blog))
            .catch(err => res.status(400).send(err))
    },

    clapBlog: (req, res, next) => {
        // Blog.findByIdAndUpdate()
    },

    commentBlog: (req, res, next) => {
        const { blogID, content } = req.body;
        Blog.findByIdAndUpdate(blogID, {
            $push: {
                comments: {
                    user: req.user._id,
                    content,
                }
            }
        }, { new: true })
            .then(blog => {
                if (!blog) return res.status(404).send('No blog found');

                return res.send(blog);
            })
            .catch(err => res.status(400).send(err));
    },


}
const Blog = require('../models/Blog');

const {
    validateNewBlogInput,
    validateCommentInput,
} = require('../validators');

module.exports =
{
    getBlogs: (req, res, next) => {
        let page = req.query.page || 1;
        const postsPerPage = 2;
        page = parseInt(page, 10);
        if (Number.isNaN(page)) {
            return res.status(400).send({ error: 'Invaid page number' })
        }

        Blog.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'author'
                }
            },
            {
                $project: {
                    'author.password': 0,
                    'author.followers': 0,
                    'author.following': 0,
                    'comments': 0,
                }
            },
            {
                '$facet': {
                    metadata: [{ $count: "total" }],
                    data: [{ $skip: ((page - 1) * postsPerPage) }, { $limit: postsPerPage }]
                }
            },
        ])
            .then(blogs => res.send(blogs))
            .catch(err => res.status(400).send(err));
    },

    getSingleBlog: (req, res, next) => {
        Blog.findById(req.params.id)
            .populate('author', 'name email _id')
            .populate('comments.user', 'name email _id')
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

    getBlogByTags: (req, res, next) => {
        const searchTags = req.query.tags;
        if (searchTags === undefined) {
            return res.status(400).send({ error: 'Tags required' })
        }
        Blog.find({ tags: { $in: searchTags } })
            .populate('author', 'name email')
            .then(blogs => res.send(blogs))
            .catch(err => res.status(400).send({ error: err.toString() }))
    },

    postBlog: (req, res, next) => {
        const { errors, isValid } = validateNewBlogInput(req.body);

        if (!isValid) return res.status(400).send({ errors });

        const { title, description, content, image, tags } = req.body;
        const author = req.user._id;

        const bannerImage = req.file ?
            `/uploads/${req.file.filename}` :
            undefined

        const newBlog = new Blog({
            title,
            description,
            content,
            image,
            author,
            tags,
            bannerImage,
        });

        newBlog.save()
            .then(blog => res.send(blog))
            .catch(err => res.status(400).send(err))
    },

    deleteBlog: (req, res, next) => {
        Blog.findOneAndDelete({ _id: req.body.id, author: req.user._id })
            .then((blog) => {
                if (!blog) {
                    return res.status(404).send(blog)
                }
                return res.send(blog)
            })
            .catch(err => res.status(400).send(err));
    },

    clapBlog: (req, res, next) => {
        Blog.findByIdAndUpdate(req.body.id, {
            $inc: { claps: 1 },
            $addToSet: { clappers: req.user._id }
        }, { new: true })
            .then(blog => res.send(blog))
            .catch(err => res.status(400).send(err));
    },

    commentBlog: (req, res, next) => {
        const { errors, isValid } = validateCommentInput(req.body);

        if (!isValid) return res.status(400).send({ errors });

        const { id, content } = req.body;
        Blog.findByIdAndUpdate(id, {
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

    deleteComment: (req, res, next) => {
        const { blogID, commentID } = req.body;
        Blog.findByIdAndUpdate(blogID, {
            $pull: {
                comments: {
                    _id: commentID,
                    user: req.user._id,
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
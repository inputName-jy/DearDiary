const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { withAuth, logRoutingInfo } = require('../../utils/helpers');

// GET all jobs
router.get('/',logRoutingInfo, async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'email']
                },
            ]
        }
        )
        const posts = allPosts.map((post) => post.get({plain: true}));
        res.render('allPosts', {posts, loggedIn: req.session.loggedIn});

    } catch (err) {
        res.status(500).json(err)
    }
});




module.exports = router;
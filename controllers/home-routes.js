const router = require('express').Router();
const {withAuth, logRoutingInfo} = require('../utils/helpers');
const {User, Post, Comment} = require('../models');


router.get('/', logRoutingInfo, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'email']
                },
            ]    
        })

        const posts = postData.map((post) => 
            post.get({plain: true})
        );


        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// GET conditional login page through href in main.handlebar
router.get('/login', logRoutingInfo, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
});


router.get('/signup', logRoutingInfo, async (req, res) => {
    res.render('signup', {loggedIn: req.session.loggedIn});
});

router.get('/dashboard', logRoutingInfo, withAuth, async (req, res) => {

    const newUserData = await User.findByPk(req.session.user.id,{
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'body', 'user_id']
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'createdAt', 'user_id', 'post_id']
            }
    ]}
)

    const users = newUserData.get({plain : true})

    res.render('dashboard', { users, user: req.session.user , loggedIn: req.session.loggedIn});

});


router.get('/post/:id', logRoutingInfo, async (req, res) => {
    try {
        const onePost = await Post.findOne({
            where: {id : req.params.id},
            attributes: ['id', 'title', 'body', 'user_id', 'createdAt'],
            include: [
                {
                    model: User,
                    attributes: ['username', 'email']
                },
                {
                    model: Comment,
                    attributes: ['id', 'content', 'createdAt', 'user_id', 'post_id'],
                    include:
                        {
                            model: User,
                            attributes: ['username', 'email']
                        }
                }
            ]
        })

        const post = onePost.get({plain: true});




        res.render('onePost', {post, loggedId: req.session.id, loggedUser: req.session.user, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;


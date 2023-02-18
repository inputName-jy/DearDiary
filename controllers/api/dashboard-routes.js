const router = require('express').Router();
const {User, Post} = require('../../models')
const {withAuth, logRoutingInfo} = require('../../utils/helpers');

router.post('/', logRoutingInfo, withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user.id
        })
        res.status(200).json(postData);
    } catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.delete('/:id', logRoutingInfo, withAuth, async (req, res) =>{
    try {
        const newPostData = await Post.destroy({
            where: {
            id: req.params.id}
        });

        // const job = newJobData.get({plain: true})

        res.json(newPostData);
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
    }
});


module.exports = router;
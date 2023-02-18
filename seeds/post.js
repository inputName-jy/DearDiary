const { Post } = require('../models');

const postData = [
    {   
        id: 1,
        title: "Post 1",
        body : "Post content 1",
        user_id: 3,
        created_at: new Date(),
    },
    {
        id: 2,
        title: "Post 2",
        body: "Post content 2",
        user_id: 3,
        created_at: new Date(),
    },
    {
        id: 3,
        title: "Post 3",
        body : "Post content 3",
        user_id: 3,
        created_at: new Date(),
    },
    {
        id: 4,
        title: "Post 4",
        body : "Post content 4",
        user_id: 5,
        created_at: new Date(),
    },
    {
        id: 5,
        title: "Post 5",
        body : "Post content 5",
        user_id: 5,
        created_at: new Date(),
    },
    {
        id: 6,
        title: "First post",
        body : "Post content 4",
        user_id: 3,
        created_at: new Date(),
    },
    {
        id: 7,
        title: "hard coded post",
        body : "Post content 4",
        user_id: 3,
        created_at: new Date(),
    },   
    {
        id: 8,
        title: "Test post",
        body : "Post content 4",
        user_id: 5,
        created_at: new Date(),
    },
];

const seedJob = () => Post.bulkCreate(postData);

module.exports = seedJob;
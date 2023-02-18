const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "salOne",
        email: "sal@hotmail.com",
        password: "password",
      },
      {
        id: 2,
        username: "Lernantino",
        email: "lernantino@gmail.com",
        password: "password",

      },
      {
        id: 3,
        username: "Amiko",
        email: "amiko2k20@aol.com",
        password: "password",
      },
      {
        id: 4,
        username: "Jordan",
        email: "jordan99@msn.com",
        password: "password",
      },
      {
        id: 5,
        username: "Blake",
        email: "the_blake@yahoo.com",
        password: "password",
      }
];

const seedUser = async () => {
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
};

module.exports = seedUser;
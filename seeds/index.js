const sequelize = require('../config/connection');
const seedPost = require('./post');
const seedUser = require('./user');

const seedData = async () => {
    
    await sequelize.sync({ force: true});
    
    await seedUser();
    await seedPost();

    process.exit(0);

};

seedData();
const sequelize = require('../config/connection');

const seedMember = require('./memberData');
const seedDrink = require('./drinkData');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMember();

  await seedDrink();

  process.exit(0);
};

seedAll();

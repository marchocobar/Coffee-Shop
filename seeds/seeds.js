const sequelize = require('../config/connection');
const seedGallery = require('./drinkData');
const seedPaintings = require('./memberData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDrink();

  await seedMember();

  process.exit(0);
};

seedAll();

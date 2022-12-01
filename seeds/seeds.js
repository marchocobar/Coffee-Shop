const sequelize = require('../config/connection');

const seedMember = require('./memberData');
const seedDrink = require('./drinkData');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMember();

  await seedDrink();

  // for (const drink of drinkData) {
  //   await Drink.create({
  //     ...drink,
  //     member_id: members[Math.floor(Math.random() * members.length)].id,
  //   });
  // }

  process.exit(0);
};

seedAll();

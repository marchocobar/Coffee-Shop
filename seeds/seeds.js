const sequelize = require('../config/connection');

const {Drink} = require("../models");

const drinkData = require('./drinkData.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  const members = await Drink.bulkCreate(drinkData, {
    individualHooks: true,
    returning: true,
  });

  // for (const drink of drinkData) {
  //   await Drink.create({
  //     ...drink,
  //     member_id: members[Math.floor(Math.random() * members.length)].id,
  //   });
  // }

  process.exit(0);
};

seedAll();

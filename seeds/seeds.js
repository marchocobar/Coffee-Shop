const sequelize = require('../config/connection');

const {Drink} = require("../models");

const drinkData = require('./drinkData.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Drink.bulkCreate(drinkData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();

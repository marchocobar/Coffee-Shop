const { Drink } = require('../models');

const drinkdata = [
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "" 
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "" 
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": ""
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": ""
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": ""
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": ""
    },
];

const seedDrink = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrink;
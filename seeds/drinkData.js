const { Drink } = require('../models');

const drinkdata = [
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "",
        "member_favorite": ,
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "",
        "member_favorite": ,
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "",
        "member_favorite": ,
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "",
        "member_favorite": ,
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "",
        "member_favorite": ,
    },
    {
        "drink_name": "",
        "description": "",
        "price": ,
        "image": "",
        "member_favorite": ,
    },
];

const seedDrink = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrink;
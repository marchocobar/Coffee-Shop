const { Drink } = require('../models');

const drinkdata = [
    {

        "drink_name": "Korinna Blend",
        "description": "Bold blend of Mexican Coatepec, Costa Rican and French Colombian beans.",
        "price": 12.99,
        "image": "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
    },
    {
        "drink_name": "Marissa Blend",
        "description": "A well balanced blend of Ethiopian Mocha and Java Mountain Supreme.",
        "price": 12.99,
        "image": "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
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
const { Drink } = require('../models');

const drinkData = [
    {

        "name": "Korinna Blend",
        "description": "Bold blend of Mexican Coatepec, Costa Rican and French Colombian beans.",
        "price": 12.99,
        "image": "image/p1.png" 
    },
    {
        "name": "Marissa Blend",
        "description": "A well balanced blend of Ethiopian Mocha and Java Mountain Supreme.",
        "price": 12.99,
        "image": "image/p2.png" 
    },
    {
        "name": "Jared Blend",
        "description": "A well balanced blend of Ethiopian Mocha and Java Mountain Supreme.",
        "price": 12.99,
        "image": "image/p3.png" 
    },
    {
        "name": "Juan Blend",
        "description": "A well balanced blend of Ethiopian Mocha and Java Mountain Supreme.",
        "price": 12.99,
        "image": "image/p4.png" 
    },
    {
        "name": "Jonathan Blend",
        "description": "A well balanced blend of Ethiopian Mocha and Java Mountain Supreme.",
        "price": 12.99,
        "image": "image/p5.png" 
    }
    
];

const seedDrink = () => Drink.bulkCreate(drinkData);

module.exports = seedDrink;
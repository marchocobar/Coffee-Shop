const { Member } = require('../models');

const memberdata = [
    {
        "name": "",
        "favorite_drink": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "favorite_drink": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "favorite_drink": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "favorite_drink": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "favorite_drink": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "favorite_drink": "",
        "email": "",
        "password": ""
    },
];

const seedMember = () => Member.bulkCreate(memberdata);

module.exports = seedMember;
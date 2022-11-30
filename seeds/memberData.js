const { Member } = require('../models');

const memberdata = [
    {
        "name": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "email": "",
        "password": ""
    },
    {
        "name": "",
        "email": "",
        "password": ""
    },
];

const seedMember = () => Member.bulkCreate(memberdata);

module.exports = seedMember;
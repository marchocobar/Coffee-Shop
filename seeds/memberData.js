const { Member } = require('../models');

const memberdata = [
    {
        "name": "Pete Jones",
        "email": "petejones@email.com",
        "password": "password"
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
const { Member } = require('../models');

const memberData = [
    {
        "name": "Pete Jones",
        "email": "petejones@email.com",
        "password": "password"
    }
];

const seedMember = () => Member.bulkCreate(memberData);

module.exports = seedMember;
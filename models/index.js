const Member = require('./Member');
const Drink = require('./Drink');

User.hasOne(Drink, {
    foreignKey: 'drink_id',
    onDelete: 'NULL'
});

Project.belongsTo(User, {
    foreignKey: 'drink_id'
});

module.exports = { Member, Drink };
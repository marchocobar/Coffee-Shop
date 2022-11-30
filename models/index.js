const Member = require('./Member');
const Drink = require('./Drink');

Member.hasOne(Drink, {
    foreignKey: 'member_favorite',
    onDelete: 'NULL'
});

Drink.belongsToMany(Member, {
    foreignKey: 'member_favorite'
});

module.exports = { Member, Drink };
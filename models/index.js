const Member = require('./Member');
const Drink = require('./Drink');

Member.hasMany(Drink, {
    foreignKey: ' member_id',
    onDelete: 'CASCADE'
});

Drink.belongsTo(Member, {
    foreignKey: ' member_id'
});

module.exports = { Member, Drink };
const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const drinkRoutes = require('./drinkRoutes');

router.use('/member', memberRoutes);
router.use('/drink', drinkRoutes);

module.exports = router;

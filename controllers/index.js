const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homePageRoutes');

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

module.exports = router;

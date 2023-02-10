const router = require('express').Router();

const apiRoutes = require('./api');
const dogRoutes = require('./dogRoutes');

router.use('/', userRoutes);
router.use('/dog ', apiRoutes);

module.exports = router;

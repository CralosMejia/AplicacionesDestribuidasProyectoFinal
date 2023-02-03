const {Router}= require('express');
const { getUsers } = require('../Controllers/getUsersController');

const router = Router();

router.get('/',getUsers)


module.exports = router;

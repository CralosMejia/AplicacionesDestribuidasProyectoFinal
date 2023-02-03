const {Router}= require('express');
const { updateUsers } = require('../Controllers/updateUsersController');

const router = Router();

router.put('/',updateUsers)


module.exports = router;

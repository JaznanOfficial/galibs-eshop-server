const express = require('express');
const { getUsersController, postUsersController, deleteUsersController, updateUsersController } = require('../Controllers/users.controller');

const router = express.Router();

router.route('/')
    .get(getUsersController)
    .post(postUsersController)
    .delete(deleteUsersController)
    .patch(updateUsersController)



module.exports = router;
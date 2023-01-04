const express = require('express');
const { getStaffsController, postStaffsController, deleteStaffsController, updateStaffsController } = require('../Controllers/staffs.controller');

const router = express.Router();

router.route('/')
    .get(getStaffsController)
    .post(postStaffsController)
    .delete(deleteStaffsController)
    .patch(updateStaffsController)



module.exports = router;
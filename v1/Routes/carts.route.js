const express = require('express');
const { getCartsController, postCartsController, deleteCartsController, updateCartsController } = require('../Controllers/carts.controller');

const router = express.Router();

router.route('/')
    .get(getCartsController)
    .post(postCartsController)
    .delete(deleteCartsController)
    .patch(updateCartsController)



module.exports = router;
const express = require('express');
const { getOrdersController, postOrdersController, deleteOrdersController, updateOrdersController } = require('../Controllers/orders.controller');

const router = express.Router();

router.route('/')
    .get(getOrdersController)
    .post(postOrdersController)
    .delete(deleteOrdersController)
    .patch(updateOrdersController)



module.exports = router;
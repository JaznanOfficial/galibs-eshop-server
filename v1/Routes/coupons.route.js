const express = require('express');
const { getCouponsController, postCouponsController, deleteCouponsController, updateCouponsController } = require('../Controllers/coupons.controller');

const router = express.Router();

router.route('/')
    .get(getCouponsController)
    .post(postCouponsController)
    .delete(deleteCouponsController)
    .patch(updateCouponsController)



module.exports = router;
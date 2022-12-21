const express = require('express');
const { getProductsController, postProductsController, deleteProductsController, updateProductsController } = require('../Controllers/products.controller');

const router = express.Router();

router.route('/')
    .get(getProductsController)
    .post(postProductsController)
    .delete(deleteProductsController)
    .patch(updateProductsController)



module.exports = router;
const express = require('express');
const { getBrandsController, postBrandsController, deleteBrandsController, updateBrandsController } = require('../Controllers/brands.controller');

const router = express.Router();

router.route('/')
    .get(getBrandsController)
    .post(postBrandsController)
    .delete(deleteBrandsController)
    .patch(updateBrandsController)



module.exports = router;
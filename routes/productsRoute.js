// routes/productsRoute.js

const express = require('express');
var router = express.Router();

const productsController = require('../controller/productsController');


router.get('/products', productsController.getProducts);
router.get('/getFilters',productsController.getFilters)
module.exports = router;

const express = require('express');
const router = express.Router();

//Page imports
const {GetCpuData} = require('../controllers/ProductCategories/cpu.js')
const {GetGpuData} = require('../controllers/ProductCategories/gpu.js')
const {GetMotherboardData} = require('../controllers/ProductCategories/motherboard.js');

const {GetProductData}  = require('../controllers/product.js');


//CPU Router
router
.route('/cpu')
.get(GetCpuData);

//GPU Router
router
.route('/gpu')
.get(GetGpuData);

//Motherboard Router
router
.route('/motherboard')
.get( GetMotherboardData);


router
.route('/:productId')
.get(GetProductData);


module.exports = router;
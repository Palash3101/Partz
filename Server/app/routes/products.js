const express = require('express');
const router = express.Router();

//Page imports
const {GetCpuData} = require('../controllers/ProductCategories/cpu.js')
const {GetGpuData} = require('../controllers/ProductCategories/gpu.js')
const {GetMotherboardData} = require('../controllers/ProductCategories/motherboard.js');
const {GetMemoryData} = require('../controllers/ProductCategories/memory.js');
const {GetStorageData} = require('../controllers/ProductCategories/storage.js');
const {GetPowerSupplyData} = require('../controllers/ProductCategories/powersupply.js');

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

//Moemory Router
router
.route('/memory')
.get(GetMemoryData);

//Storage Router
router
.route('/storage')
.get(GetStorageData);

//Power Supply Router
router
.route('/powersupply')
.get(GetPowerSupplyData);


router
.route('/:productId')
.get(GetProductData);


module.exports = router;
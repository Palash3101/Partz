const express = require('express');
const { pool } = require('../database.js');
const { default: getTypeQuery } = require('../services/getTypeQuery.js');

const router = express.Router();

router.get('/cpu', async (req, res) => {
  const data = await pool.query('SELECT products.id, name, price, rating, base_clock, boost_clock, TDP,core_count, integrated_gpu  FROM cpu, products WHERE cpu.id = products.id')
  res.send(data[0]);
});


router.get('/gpu', async (req, res) => {
  const data = await pool.query('SELECT products.id, name, price, rating, vram_version, vram, DLSS_version, FSR_version, TDP, boost_clock, cuda_cores, RT_enabled FROM gpu, products WHERE gpu.id = products.id')
  res.send(data[0]);
});

router.get('/:productId', async (req, res)=>{
  product_id = req.params.productId
  let data = await pool.query('SELECT id, product_type_name FROM products, product_type_lookup WHERE id = ? and products.product_type_id = product_type_lookup.product_type_id;', [product_id])
  
  product_type  =data[0][0].product_type_name

  data = await pool.query(getTypeQuery(product_type, product_id))
  res.send(data[0][0]);
});




module.exports = router;
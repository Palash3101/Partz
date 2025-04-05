const express = require('express');
const { pool } = require('../database.js');
const { default: getTypeQuery } = require('../services/getTypeQuery.js');
const { default: checkType } = require('../services/structureOutput.js');
const { default: reformatProductOutput } = require('../services/reformatProductOutput.js');

const router = express.Router();

router.get('/cpu', async (req, res) => {
  let data = await pool.query('SELECT products.id, name, price, rating, base_clock, boost_clock, TDP,core_count, integrated_gpu  FROM cpu, products WHERE cpu.id = products.id')
  
  data = data[0].map((item) => {
    return reformatProductOutput(item)
  })

  res.send(data);
});


router.get('/gpu', async (req, res) => {
  let data = await pool.query('SELECT products.id, name, price, rating, vram_version, vram, DLSS_version, FSR_version, TDP, boost_clock, cuda_cores, RT_enabled FROM gpu, products WHERE gpu.id = products.id')
  
  data = data[0].map((item) => {
    item = reformatProductOutput(item)
    let x = item.specs.vram + 'GB '+ item.specs.vram_version
    delete item.specs.vram_version
    delete item.specs.vram
    item.specs.vram = x
    return item
  })
  
  res.send(data);
});

router.get('/:productId', async (req, res)=>{
  product_id = req.params.productId
  try{
    let data = await pool.query('SELECT id, product_type_name FROM products, product_type_lookup WHERE id = ? and products.product_type_id = product_type_lookup.product_type_id;', [product_id])
    product_type  =data[0][0].product_type_name
  
    data = await pool.query(getTypeQuery(product_type, product_id))
    data = data[0][0]
  
    data.product_type = product_type
  
    data = checkType(data)
  
    res.send(data);
  }
  catch(err){
    res.status(404).send('Product not found')
    return
  }
  
});




module.exports = router;
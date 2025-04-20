const { checkType } = require('../utils/structureOutput.js');
const { getTypeQuery } = require('../utils/getTypeQuery.js');
const { pool } = require('../database.js');

async function GetProductData(req, res) {

  const productId = req.params.productId;

  try{
    const st =  `SELECT id, product_type_name FROM products, product_type_lookup WHERE id = ? and products.product_type_id = product_type_lookup.product_type_id;`
    console.log(st)
    let data = await pool.query(st, [productId])
    product_type  =data[0][0].product_type_name
  
    data = await pool.query(getTypeQuery(product_type, productId))
    data = data[0][0]
  
    data.product_type = product_type
  
    data = checkType(data)
  
    res.send(data)
    if (pool) pool.releaseConnection();
  }
  catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
    if (pool) pool.releaseConnection();
    return
  } 
}

module.exports = {GetProductData};
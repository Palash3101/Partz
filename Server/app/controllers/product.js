const { checkType } = require('../utils/structureOutput.js');
const { getTypeQuery } = require('../utils/getTypeQuery.js');
const { pool } = require('../database.js');
const {SendDataAndReleaseConnection} = require('../utils/SendDataAndReleaseConnection.js')

async function GetProductData(req, res) {

  product_id = req.params.productId
  try{
    const st =  `SELECT id, product_type_name FROM products, product_type_lookup WHERE id = ${productId} and products.product_type_id = product_type_lookup.product_type_id;`

    let data = await pool.query(st)
    product_type  =data[0][0].product_type_name
  
    data = await pool.query(getTypeQuery(product_type, product_id))
    data = data[0][0]
  
    data.product_type = product_type
  
    data = checkType(data)
  
    SendDataAndReleaseConnection(res, data, pool)
  }
  catch(err){
    res.status(404).send('Product not found')
    return
  } 
}

module.exports = {GetProductData};
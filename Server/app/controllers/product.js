const { getTypeQuery } = require('../utils/getTypeQuery.js');
const { pool } = require('../database.js');

async function GetProductData(req, res) {

  const productId = req.params.productId;

  try{
    const st =  `SELECT id, product_type_name FROM products, product_type_lookup WHERE id = ? and products.product_type_id = product_type_lookup.product_type_id;`
    let data = await pool.query(st, [productId])
    product_type  =data[0][0].product_type_name
  
    data = await pool.query(getTypeQuery(product_type, productId))
    data = data[0][0]
  
    data.product_type = product_type

    data = productStructurer(data)

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


function productStructurer(data){
  product={
    name: data.name,
    price: data.price,
    rating: data.rating,
    type: data.product_type,
    retailers: [
      { name: "Amazon", price: 599.99, stock: "In Stock", link: 'empty'},
      { name: "PrimeABGB", price: 589.99, stock: "In Stock", link:'empty' },
      { name: "AMD", price: 619.99, stock: "In Stock", link:'empty' }
    ]
    }

  delete data.name
  delete data.price
  delete data.rating
  delete data.id
  delete data.product_type
  delete data.product_type_id

  console.log(data)

  product.specs = data

  return product
} 

module.exports = {GetProductData};
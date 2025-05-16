const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetStorageData(req, res) {
  try{
    const st = `SELECT 
      products.id, \`name\`, price, rating, P.product_type_name,
    form_factor AS \`form factor\`,
    interface AS \`type\`,
      capacity,
      RW_speeds
      FROM
        \`storage\`, products, product_type_lookup as P
      WHERE
        \`storage\`.id = products.id AND
      products.product_type_id = P.product_type_id;
        `

    let data = await getOutput(st, pool)
    res.send(data)
    if (pool) pool.releaseConnection();

  }
  catch(err){
    console.log(err);
    res.status(500).send('Internal Server Error');
    if (pool) pool.releaseConnection();
    return 
  }
}


module.exports = {
  GetStorageData
};
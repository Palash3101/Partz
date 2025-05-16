const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetMemoryData(req, res){
  try{
  //Query
  const st = `SELECT 
	products.id, \`name\`, price, rating,P.product_type_name,
    concat(amount, 'GB ', generation) AS size,
    concat(speed, ' MHZ') AS speed,
    type, size AS style
FROM
	\`memory\`, products, product_type_lookup as P
WHERE
	\`memory\`.id = products.id AND
      products.product_type_id = P.product_type_id;`
  
  //process the data
  let data = await getOutput(st, pool)

  //sent response and release connection
  res.send(data)
  if (pool)pool.releaseConnection();

} catch(err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    if (pool) pool.releaseConnection();
    return 
}}

module.exports = {
 GetMemoryData
};